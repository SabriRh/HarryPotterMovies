import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MovieCardComponent } from './movie-card.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { Movie } from '../../models/movie.model';

describe('MovieCardComponent', () => {
  let component: MovieCardComponent;
  let fixture: ComponentFixture<MovieCardComponent>;

  const mockMovie: Movie = {
    id: '1',
    title: 'Harry Potter and the Philosopher\'s Stone',
    release_date: '2001-11-16',
    budget: '125000000',
    duration: '152',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MovieCardComponent],
      providers: [
        { provide: ActivatedRoute, useValue: { params: of({ id: '1' }) } }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MovieCardComponent);
    component = fixture.componentInstance;
    component.movie = mockMovie;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
