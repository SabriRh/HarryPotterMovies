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

  resolve: ResolveFn<MovieDetails> = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<MovieDetails> => {
    const movieId = route.paramMap.get('movieId');
    return this.moviesService.getMovieDetails(movieId!).pipe(takeUntilDestroyed(this.#destroyRef));
  }
}
