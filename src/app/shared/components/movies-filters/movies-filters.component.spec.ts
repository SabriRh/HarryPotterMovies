import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesFiltersComponent } from './movies-filters.component';

describe('MoviesFiltersComponent', () => {
  let component: MoviesFiltersComponent;
  let fixture: ComponentFixture<MoviesFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoviesFiltersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoviesFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
