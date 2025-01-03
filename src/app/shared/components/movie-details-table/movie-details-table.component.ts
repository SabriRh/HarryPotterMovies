import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MovieDetails } from '../../models/movie.model';
import { BudgetPipe } from "../../pipes/budget.pipe";
import { DurationPipe } from "../../pipes/duration.pipe";

@Component({
  selector: 'app-movie-details-table',
  standalone: true,
  imports: [DurationPipe, BudgetPipe],
  templateUrl: './movie-details-table.component.html',
  styleUrl: './movie-details-table.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieDetailsTableComponent {
  /**
   * Movie details to display
   */
  @Input() movieDetails!: MovieDetails;
}
