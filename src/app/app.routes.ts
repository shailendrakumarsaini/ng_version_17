import { Routes } from '@angular/router';
import { TeamComponent } from './team/team.component';
import { CountryFilterComponent } from './country-filter/country-filter.component';

export const routes: Routes = [
    { path: '', redirectTo: 'team', pathMatch: 'full' },
    { path: 'country-filter', component: CountryFilterComponent },
    { path: 'team', component: TeamComponent },
];
