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
  private apiUrl = `${environment.apiUrl}/movies`;

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
  // movies signal
  loader = signal<boolean>(true);

  constructor(private http: HttpClient) { }

  loadMovies(): void {
    this.http.get<Movie[]>(this.apiUrl)
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe((movies) => {
        this.movies.set(movies);
        this.loader.set(false);
      });
  }

  updateFilters(newFilters: MovieFilters): void {
    this.filters.set(newFilters);
  }

  getMovieDetails(movieId: string): Observable<MovieDetails> {
    return this.http.get<MovieDetails>(`${this.apiUrl}/${movieId}`)
  }
}
