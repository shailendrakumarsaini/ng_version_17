
import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, GuardResult, MaybeAsync, Router, RouterStateSnapshot, CanActivateChildFn } from "@angular/router";
import { RoleService } from "../services/role.service";

@Injectable({
  providedIn:"root"
})
export class RoleCanActivateChildGuard implements CanActivateChild {

  constructor(
    private roleService: RoleService,
    private router: Router
  ){}

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {

    if(this.roleService.getRole() !== 'admin'){
      this.router.navigate(['/access-denied']);
      return false;
    }

    return true;
  }

}


export const RoleCanActivateChildGuardFn: CanActivateChildFn = (childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const roleService = inject(RoleService);
  const routerService = inject(Router);

  if(roleService.getRole() !== 'admin'){
    routerService.navigate(['/access-denied']);
    return false;
  }

  return true;
};