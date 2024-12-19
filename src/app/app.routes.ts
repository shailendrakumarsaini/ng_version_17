import { Routes } from '@angular/router';
import { RoleGuard } from './guards/role.guard';
import { roleGuardFn } from './guards/role.guard';

import { MapComponent } from './rxjs/map/map.component';
import { FilterComponent } from './rxjs/filter/filter.component';
import { DebounceTimeComponent } from './rxjs/debounce-time/debounce-time.component';
import { ThrottleTimeComponent } from './rxjs/throttle-time/throttle-time.component';
import { IntervalComponent } from './rxjs/interval/interval.component';
import { MergeMapComponent } from './rxjs/merge-map/merge-map.component';
import { SwitchMapComponent } from './rxjs/switch-map/switch-map.component';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { TeamsComponent } from './teams/teams.component';
import { CountryFilterComponent } from './country-filter/country-filter.component';
import { BasketBallComponent } from './basket-ball/basket-ball.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { ViewChildrenComponent } from './view-children/view-children.component';
import { ContentChildComponent } from './content-child/content-child.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path :'', component: HomeComponent },
    { path :'home', component: HomeComponent },
    { 
        path :'basket-ball', component: BasketBallComponent, 
        canActivate : [
            // RoleGuard, // interface based implementation
            roleGuardFn // function based implementation
        ] 
    },
    { path :'country-filter', component: CountryFilterComponent, canActivate: [roleGuardFn] },
    { path :'currency-converter', component: CurrencyConverterComponent, canActivate: [roleGuardFn] },
    { path :'team', component: TeamsComponent, canActivate: [roleGuardFn] },
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
            { path: 'debounce-time', component : DebounceTimeComponent },
            { path: 'throttle-time', component : ThrottleTimeComponent },
            { path: 'interval', component : IntervalComponent },
            { path: 'merge-map', component : MergeMapComponent },
            { path: 'switch-map', component : SwitchMapComponent },
        ]
    },
    { path : 'ng-content', component: NgContentComponent, canActivate: [roleGuardFn] },
    { path : 'view-child', component: ViewChildComponent, canActivate: [roleGuardFn] },
    { path : 'view-children', component: ViewChildrenComponent, canActivate: [roleGuardFn] },
    { path : 'content-child', component: ContentChildComponent, canActivate: [roleGuardFn] },
    { path : 'access-denied', component: AccessDeniedComponent },
    { path : '**', component: AccessDeniedComponent }
];
