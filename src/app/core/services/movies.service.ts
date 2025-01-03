import { HttpClient } from '@angular/common/http';
import { computed, DestroyRef, inject, Injectable, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { MovieFilters } from '../../shared/models/movie-filters.model';
import { Movie, MovieDetails } from '../../shared/models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  #destroyRef = inject(DestroyRef);

  // Endpoint config
  private apiUrl = `${environment.baseUrl}/movies`;

  // movies signal
  private movies = signal<Movie[]>([]);
  // filters signal
  private filters = signal<MovieFilters>({
    title: '',
    releaseYear: null,
  });
  // filtred movies signal
  filteredMovies = computed(() => {
    const { title, releaseYear } = this.filters();
    return this.movies().filter((movie) => {
      const matchesTitle = !title || movie.title.toLowerCase().includes(title.toLowerCase());
      const matchesReleaseYear = releaseYear == null || new Date(movie.release_date).getFullYear() === releaseYear;
      return matchesTitle && matchesReleaseYear;
    });
  });
  // loader signal
  loader = signal<boolean>(true);

  constructor(private http: HttpClient) { }

  /**
   * Load movies from API and update movies & loader signals
   */
  loadMovies(): void {
    this.http.get<Movie[]>(this.apiUrl)
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe((movies) => {
        this.movies.set(movies);
        this.loader.set(false);
      });
  }

  /**
   * update filters signal
   * @param newFilters : MovieFilters
   */
  updateFilters(newFilters: MovieFilters): void {
    this.filters.set(newFilters);
  }

  /**
   * get movie details by movieId
   * @param movieId : string
   * @returns Observable<MovieDetails>
   */
  getMovieDetails(movieId: string): Observable<MovieDetails> {
    return this.http.get<MovieDetails>(`${this.apiUrl}/${movieId}`)
  }
}
