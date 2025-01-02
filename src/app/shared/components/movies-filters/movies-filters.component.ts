import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MovieFilters } from '../../models/movie-filters.model';

@Component({
  selector: 'app-movies-filters',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './movies-filters.component.html',
  styleUrl: './movies-filters.component.css'
})
export class MoviesFiltersComponent implements OnInit {
  @Output() filtersChanged = new EventEmitter<MovieFilters>();

  filtersForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.filtersForm = this.fb.group({
      title: [''],
      releaseYear: [null],
    });
  }

  ngOnInit(): void {
    this.filtersForm.valueChanges.subscribe((value) => {
      console.log('filters changed ::: ', value);
      this.filtersChanged.emit(value);
    });
  }

  clearFilters(): void {
    this.filtersForm.reset({
      title: '',
      releaseYear: null,
    });
  }
}
