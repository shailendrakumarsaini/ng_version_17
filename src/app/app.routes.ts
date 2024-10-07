import { Routes } from '@angular/router';

export const routes: Routes = [
    { path : 'signal', loadComponent : ()=> import('./signal/signal.component').then(c => c.SignalComponent)}
];
