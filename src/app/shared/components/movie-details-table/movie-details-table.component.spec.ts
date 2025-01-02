import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailsTableComponent } from './movie-details-table.component';
import { signal } from '@angular/core';
import { MovieDetails } from '../../models/movie.model';

describe('MovieDetailsTableComponent', () => {
  let component: MovieDetailsTableComponent;
  let fixture: ComponentFixture<MovieDetailsTableComponent>;

  const mockMovieDetails: MovieDetails = {
    id: '1',
    title: 'Harry Potter and the Philosopher\'s Stone',
    release_date: '2001-11-16',
    budget: '125000000',
    duration: '152',
    box_office: '974755371',
    poster: 'https://image.tmdb.org/t/p/w500/xyz.jpg',
    summary: 'Harry Potter has lived under the stairs at his aunt and uncle\'s house his whole life. But on his 11th birthday, he learns he\'s a powerful wizard -- with a place waiting for him at the Hogwarts School of Witchcraft and Wizardry. As he learns to harness his newfound powers with the help of the school\'s kindly headmaster, Harry uncovers the truth about his parents\' deaths -- and about the villain who\'s to blame.',
    producers: ['David Heyman'],
    cinematographers: ['Chris Columbus']
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieDetailsTableComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MovieDetailsTableComponent);
    component = fixture.componentInstance;
    component.movieDetails = mockMovieDetails;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
