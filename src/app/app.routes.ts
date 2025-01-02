import { Routes } from '@angular/router';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { MoviesDetaisComponent } from './movies/movies-detais/movies-detais.component';
import { MovieDetailsResolver } from './shared/resolvers/movie-details.resolver';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/movies',
        pathMatch: 'full'
    },
    {
        path: 'movies',
        component: MoviesListComponent
    },
    {
        path: 'movies/:movieId',
        component: MoviesDetaisComponent,
        resolve: { movie: MovieDetailsResolver }
    },
    {
        path: '**',
        redirectTo: '/movies'
    }
];
