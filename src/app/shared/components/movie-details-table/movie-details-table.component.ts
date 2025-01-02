import { Component, Input, input } from '@angular/core';
import { MovieDetails } from '../../models/movie.model';
import { BudgetPipe } from "../../pipes/budget.pipe";
import { DurationPipe } from "../../pipes/duration.pipe";

@Component({
  selector: 'app-movie-details-table',
  standalone: true,
  imports: [DurationPipe, BudgetPipe],
  templateUrl: './movie-details-table.component.html',
  styleUrl: './movie-details-table.component.css'
})
export class MovieDetailsTableComponent {
  @Input() movieDetails!: MovieDetails;
}
