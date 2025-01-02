import { Component, Signal } from '@angular/core';
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
  styleUrl: './movies-list.component.css'
})
export class MoviesListComponent {
  filteredMovies: Signal<Movie[]> = this.moviesService.filteredMovies;
  loader: Signal<boolean> = this.moviesService.loader;
  constructor(private moviesService: MoviesService) {
    this.moviesService.loadMovies();
  }

  public applyFilters(filters: MovieFilters): void {
    this.moviesService.updateFilters(filters);
  }

  public trackByMovieId(index: number, movie: Movie): string {
    return movie.id;
  }
}
