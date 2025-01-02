import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { MoviesDetaisComponent } from './movies-detais.component';
import { MovieDetails } from '../../shared/models/movie.model';

describe('MoviesDetaisComponent', () => {
  let component: MoviesDetaisComponent;
  let fixture: ComponentFixture<MoviesDetaisComponent>;
  const mockMovieDetails: MovieDetails = {
    id: '1',
    title: 'Harry Potter and the Philosopher\'s Stone',
    cinematographers: ['Chris Columbus'],
    release_date: '2001-11-16',
    budget: '125000000',
    box_office: '974755371',
    poster: 'https://image.tmdb.org/t/p/w500/xyz.jpg',
    producers: ['David Heyman'],
    summary: 'Harry Potter has lived under the stairs at his aunt and uncle\'s house his whole life. But on his 11th birthday, he learns he\'s a powerful wizard -- with a place waiting for him at the Hogwarts School of Witchcraft and Wizardry. As he learns to harness his newfound powers with the help of the school\'s kindly headmaster, Harry uncovers the truth about his parents\' deaths -- and about the villain who\'s to blame.',
    duration: '152'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoviesDetaisComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              data: {
                movie: mockMovieDetails
              }
            }
          }
        }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MoviesDetaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have movie details', () => {
    expect(component.movieDetails).toEqual(mockMovieDetails);
  });
});
