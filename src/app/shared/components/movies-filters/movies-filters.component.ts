import { ChangeDetectionStrategy, Component, DestroyRef, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MovieFilters } from '../../models/movie-filters.model';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-movies-filters',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './movies-filters.component.html',
  styleUrl: './movies-filters.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviesFiltersComponent implements OnInit {
  #destroyRef = inject(DestroyRef);
  // emit new filters
  @Output() filtersChanged = new EventEmitter<MovieFilters>();
  // form group
  filtersForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.filtersForm = this.fb.group({
      title: [''],
      releaseYear: [null],
    });
  }

  ngOnInit(): void {
    // emit new filters on form value changes
    this.filtersForm.valueChanges.pipe(takeUntilDestroyed(this.#destroyRef)).subscribe((value) => {
      this.filtersChanged.emit(value);
    });
  }
  // clear filters to reset movies list
  clearFilters(): void {
    this.filtersForm.reset({
      title: '',
      releaseYear: null,
    });
  }
}
