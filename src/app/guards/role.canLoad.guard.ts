
import { inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanLoad, GuardResult, MaybeAsync, Route, Router, RouterStateSnapshot, UrlSegment } from "@angular/router";
import { CanActivateFn } from '@angular/router';
import { RoleService } from "../services/role.service";

@Injectable({
    providedIn:'root'
})
export class RoleCanLoadGuard implements CanLoad {

    constructor(
        private roleService : RoleService,
        private router : Router
    ){}

    canLoad(route: Route, segments: UrlSegment[]): MaybeAsync<GuardResult> {
        if(this.roleService.getRole() !== 'admin'){
            this.router.navigate(['/access-denied']);
            return false;
        }
        return true;
    }
}

export const RoleCanLoadGuardFn: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const roleService = inject(RoleService);
    const router = inject(Router);

    if(roleService.getRole() !== 'admin'){
        router.navigate(['/access-denied']);
        return false;
    }
    return true;

};