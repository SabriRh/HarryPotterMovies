import { DestroyRef, inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { MoviesService } from '../../core/services/movies.service';
import { MovieDetails } from '../models/movie.model';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class MovieDetailsResolver {
  #destroyRef = inject(DestroyRef);

  constructor(private moviesService: MoviesService) { }

  /**
   * Resolve movie details based on movieId from route params
   * @param route 
   * @returns Observable<MovieDetails>
   */
  resolve: ResolveFn<MovieDetails> = (
    route: ActivatedRouteSnapshot
  ): Observable<MovieDetails> => {
    const movieId = route.paramMap.get('movieId');
    return this.moviesService.getMovieDetails(movieId!).pipe(takeUntilDestroyed(this.#destroyRef));
  }
}
