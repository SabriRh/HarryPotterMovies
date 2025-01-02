import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MoviesService } from './movies.service';
import { environment } from '../../../environments/environment';
import { Movie, MovieDetails } from '../../shared/models/movie.model';
import { MovieFilters } from '../../shared/models/movie-filters.model';

describe('MoviesService', () => {
  let service: MoviesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MoviesService]
    });
    service = TestBed.inject(MoviesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should load movies', () => {
    const mockMovies: Movie[] = [
      { id: '1', title: 'Movie 1', release_date: '2020-01-01', duration: '120', budget: '1000000' },
      { id: '2', title: 'Movie 2', release_date: '2021-01-01', duration: '90', budget: '2000000' }
    ];

    service.loadMovies();
    const req = httpMock.expectOne(`${environment.apiUrl}/movies`);
    expect(req.request.method).toBe('GET');
    req.flush(mockMovies);

    service.filteredMovies().forEach((movie, index) => {
      expect(movie).toEqual(mockMovies[index]);
    });
  });

  it('should update filters', () => {
    const newFilters: MovieFilters = { title: 'Movie 1', releaseYear: 2020 };
    service.updateFilters(newFilters);
    expect(service.filteredMovies().length).toBe(0);
  });

  it('should get movie details', () => {
    const mockMovieDetails: MovieDetails = {
      id: '1',
      title: 'Movie 1',
      release_date: '2020-01-01',
      duration: '120',
      budget: '1000000',
      poster: 'poster.jpg',
      summary: 'Summary',
      box_office: '5000000',
      producers: ['Producer 1'],
      cinematographers: ['Cinematographer 1']
    };

    service.getMovieDetails('1').subscribe((movieDetails) => {
      expect(movieDetails).toEqual(mockMovieDetails);
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/movies/1`);
    expect(req.request.method).toBe('GET');
    req.flush(mockMovieDetails);
  });
});
