import { TestBed } from '@angular/core/testing';

import { MovieDetailsResolver } from './movie-details.resolver';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MovieDetailsResolver', () => {
  let service: MovieDetailsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule], });
    service = TestBed.inject(MovieDetailsResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
