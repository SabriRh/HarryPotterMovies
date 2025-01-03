import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Movie } from '../../models/movie.model';
import { BudgetPipe } from "../../pipes/budget.pipe";
import { DurationPipe } from '../../pipes/duration.pipe';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [RouterModule, BudgetPipe, DurationPipe],
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieCardComponent {
  /**
   * Movie to display
   */
  @Input() movie!: Movie;
}
