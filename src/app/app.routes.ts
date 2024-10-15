import { Routes } from '@angular/router';
import { MapComponent } from './rxjs/map/map.component';
import { FilterComponent } from './rxjs/filter/filter.component';
import { DebounceTimeComponent } from './rxjs/debounce-time/debounce-time.component';

export const routes: Routes = [
    { path: 'signal', loadComponent: () => import('./signal/signal.component').then(c => c.SignalComponent) },
    { path: 'subject', loadComponent: () => import('./subject/subject.component').then(c => c.SubjectComponent) },
    {
        path: 'control-flow', loadComponent: () => import('./control-flow/control-flow.component').then(c => c.ControlFlowComponent),
        children: [
            { path: '', redirectTo: 'if', pathMatch: 'full' },
            { path: 'if', loadComponent: () => import('./control-flow/if/if.component').then(c => c.IfComponent) },
            { path: 'if-else', loadComponent: () => import('./control-flow/if-else/if-else.component').then(c => c.IfElseComponent) },
            { path: 'for', loadComponent: () => import('./control-flow/for/for.component').then(c => c.ForComponent) },
            { path: 'switch', loadComponent: () => import('./control-flow/switch/switch.component').then(c => c.SwitchComponent) },
        ]
    },
    { path: 'deferred-loading', loadComponent: () => import('./deferred-loading/deferred-loading.component').then(c => c.DeferredLoadingComponent) },
    { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
    {
        path: 'rxjs', loadComponent: () => import('./rxjs/rxjs.component').then(c => c.RxjsComponent),
        children: [
            { path: '', redirectTo: 'map', pathMatch: 'full' },
            { path: 'map', component: MapComponent },
            { path: 'filter', component : FilterComponent },
            { path: 'debounce-time', component : DebounceTimeComponent }
        ]
    }
];
