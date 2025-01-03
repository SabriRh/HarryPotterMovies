import { Component, Signal, ChangeDetectionStrategy } from '@angular/core';
import { MovieCardComponent } from '../../shared/components/movie-card/movie-card.component';
import { MoviesService } from '../../core/services/movies.service';
import { Movie } from '../../shared/models/movie.model';
import { CommonModule, NgFor } from '@angular/common';
import { MoviesFiltersComponent } from "../../shared/components/movies-filters/movies-filters.component";
import { MovieFilters } from '../../shared/models/movie-filters.model';

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [CommonModule, MovieCardComponent, MoviesFiltersComponent],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviesListComponent {
  // filtred movies signal
  filteredMovies: Signal<Movie[]> = this.moviesService.filteredMovies;
  // loader signal
  loader: Signal<boolean> = this.moviesService.loader;
  constructor(private moviesService: MoviesService) {
    this.moviesService.loadMovies();
  }

  // apply new filters
  public applyFilters(filters: MovieFilters): void {
    this.moviesService.updateFilters(filters);
  }

  // trackBy function to optimize ngFor
  public trackByMovieId(index: number, movie: Movie): string {
    return movie.id;
  }
}
