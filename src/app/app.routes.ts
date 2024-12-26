import { Routes } from '@angular/router';
import { MoviesComponent } from './pages/movies/movies.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'movies', component: MoviesComponent },
    { path: '',   redirectTo: '/dashboard', pathMatch: 'full' }
  ];
