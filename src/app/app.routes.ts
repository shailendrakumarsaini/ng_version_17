import { Routes } from '@angular/router';

export const routes: Routes = [
    { path : 'signal', loadComponent : ()=> import('./signal/signal.component').then(c => c.SignalComponent) },
    { path : 'subject', loadComponent : ()=> import ('./subject/subject.component').then(c => c.SubjectComponent) },
    { path : 'control-flow', loadComponent : ()=> import ('./control-flow/control-flow.component').then(c => c.ControlFlowComponent), 
        children:[
            { path : '',  redirectTo : 'if', pathMatch:'full' },
            { path : 'if',  loadComponent : ()=> import('./control-flow/if/if.component').then(c => c.IfComponent) },
            { path : 'if-else',  loadComponent : ()=> import('./control-flow/if-else/if-else.component').then(c => c.IfElseComponent) },
            { path : 'for',  loadComponent : ()=> import('./control-flow/for/for.component').then(c => c.ForComponent) },
            { path : 'switch',  loadComponent : ()=> import('./control-flow/switch/switch.component').then(c => c.SwitchComponent) },
        ] 
    },
    { path : 'user', loadChildren : ()=> import('./user/user.module').then(m=> m.UserModule)}
];
