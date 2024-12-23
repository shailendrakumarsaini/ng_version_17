import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router, CanActivateFn, MaybeAsync, GuardResult } from "@angular/router";
import { RoleService } from "../services/role.service";

@Injectable({
  providedIn:"root"
})
export class RoleCanActivateGuard implements CanActivate {

  constructor(
    private roleService: RoleService,
    private router: Router
  ){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : MaybeAsync<GuardResult>{

    if(this.roleService.getRole() !== 'admin'){
      this.router.navigate(['/access-denied']);
      return false;
    }

    return true;
  }
}


export const RoleCanActivateGuardFn: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const roleService = inject(RoleService);
  const routerService = inject(Router);

  if(roleService.getRole() !== 'admin'){
    routerService.navigate(['/access-denied']);
    return false;
  }

  return true;
};