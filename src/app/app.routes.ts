import { Routes } from '@angular/router';
import { RoleCanActivateGuard } from './guards/role.canActivate.guard';
import { RoleCanActivateGuardFn } from './guards/role.canActivate.guard';

import { RoleCanActivateChildGuard } from './guards/role.canActivateChild.guard';
import { RoleCanActivateChildGuardFn } from './guards/role.canActivateChild.guard';

import { RoleCanDeactivateGuard } from './guards/role.canDeactivate.guard';
import { RoleCanDeactivateGuardFn } from './guards/role.canDeactivate.guard';

import { RoleCanLoadGuard } from './guards/role.canLoad.guard';
import { RoleCanLoadGuardFn } from './guards/role.canLoad.guard';

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
import { NotCompleteComponent } from './not-complete/not-complete.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { HomeComponent } from './home/home.component';
import { ConcatMapComponent } from './rxjs/concat-map/concat-map.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ParentComponent } from './input-output/parent/parent.component';
import { TemplateControlContainerComponent } from './template-control-container/template-control-container.component';
import { ParentComponent as DiParent } from './parent/parent.component';

export const routes: Routes = [
    {   path :'', component: HomeComponent },
    {   path :'home', component: HomeComponent },
    { 
        path :'basket-ball', component: BasketBallComponent, 
        canActivate : [
            // RoleGuard, // interface based implementation
            RoleCanActivateGuardFn // function based implementation
        ] 
    },
    {   path :'country-filter', component: CountryFilterComponent, canActivate: [RoleCanActivateGuardFn] },
    {   path :'currency-converter', component: CurrencyConverterComponent, canActivate: [RoleCanActivateGuardFn] },
    {   path :'team', component: TeamsComponent, canActivate: [RoleCanActivateGuardFn] },
    {   path: 'signal', loadComponent: () => import('./signal/signal.component').then(c => c.SignalComponent) },
    {   path: 'subject', loadComponent: () => import('./subject/subject.component').then(c => c.SubjectComponent) },
    {
        path: 'control-flow', loadComponent: () => import('./control-flow/control-flow.component').then(c => c.ControlFlowComponent),
        canActivateChild:[
            // RoleCanActivateChildGuard, // interface based implementation
            RoleCanActivateChildGuardFn // function based implementation
        ],
        children: [
            { path: '', redirectTo: 'if', pathMatch: 'full' },
            { path: 'if', loadComponent: () => import('./control-flow/if/if.component').then(c => c.IfComponent) },
            { path: 'if-else', loadComponent: () => import('./control-flow/if-else/if-else.component').then(c => c.IfElseComponent) },
            { path: 'for', loadComponent: () => import('./control-flow/for/for.component').then(c => c.ForComponent) },
            { path: 'switch', loadComponent: () => import('./control-flow/switch/switch.component').then(c => c.SwitchComponent) },
        ]
    },
    {   path: 'deferred-loading', loadComponent: () => import('./deferred-loading/deferred-loading.component').then(c => c.DeferredLoadingComponent) },
    {   path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule),
        canLoad: [
            RoleCanLoadGuard, // interface based implementation
            RoleCanLoadGuardFn // function based implementation
        ]
    },
    {
        path: 'rxjs', loadComponent: () => import('./rxjs/rxjs.component').then(c => c.RxjsComponent),
        canActivateChild:[
            // RoleCanActivateChildGuard,
            RoleCanActivateChildGuardFn
        ],
        children: [
            { path: '', redirectTo: 'map', pathMatch: 'full' },
            { path: 'map', component: MapComponent },
            { path: 'filter', component : FilterComponent },
            { path: 'debounce-time', component : DebounceTimeComponent },
            { path: 'throttle-time', component : ThrottleTimeComponent },
            { path: 'interval', component : IntervalComponent },
            { path: 'merge-map', component : MergeMapComponent },
            { path: 'switch-map', component : SwitchMapComponent },
            { path: 'concat-map', component : ConcatMapComponent },
        ]
    },
    {   path : 'ng-content', component: NgContentComponent, canActivate: [RoleCanActivateGuardFn] },
    {   path : 'view-child', component: ViewChildComponent, canActivate: [RoleCanActivateGuardFn] },
    {   path : 'view-children', component: ViewChildrenComponent, canActivate: [RoleCanActivateGuardFn] },
    {   path : 'content-child', component: ContentChildComponent, canActivate: [RoleCanActivateGuardFn] },
    {   path : 'not-complete', component: NotCompleteComponent, 
        canDeactivate: [
            // RoleCanDeactivateGuard, // interface based implementation
            RoleCanDeactivateGuardFn // function based implementation
        ] 
    },
    {   path : 'reactive-form', component: ReactiveFormComponent },
    {   path : 'template-driven-form', component: TemplateDrivenFormComponent },
    {   path : 'input-output', component: ParentComponent },
    {   path : 'template-control-container', component: TemplateControlContainerComponent },
    {   path : 'access-denied', component: AccessDeniedComponent },
    {   path : 'parent', component: DiParent },
    {   path : '**', component: AccessDeniedComponent }
];
