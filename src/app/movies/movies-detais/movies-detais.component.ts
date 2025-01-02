import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MovieDetailsTableComponent } from "../../shared/components/movie-details-table/movie-details-table.component";
import { MovieDetails } from '../../shared/models/movie.model';

@Component({
  selector: 'app-movies-detais',
  standalone: true,
  imports: [RouterModule, CommonModule, MovieDetailsTableComponent],
  templateUrl: './movies-detais.component.html',
  styleUrl: './movies-detais.component.css'
})
export class MoviesDetaisComponent implements OnInit {
  movieDetails!: MovieDetails;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.movieDetails = this.route.snapshot.data['movie'];
  }
}
