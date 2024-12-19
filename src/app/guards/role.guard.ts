import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router, CanActivateFn } from "@angular/router";
import { RoleService } from "../services/role.service";

@Injectable({
  providedIn:"root"
})
export class RoleGuard implements CanActivate {

  constructor(
    private roleService: RoleService,
    private router: Router
  ){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if(this.roleService.getRole() !== 'admin'){
      this.router.navigate(['/access-denied']);
      return false;
    }

    return true;
  }
}


export const roleGuardFn: CanActivateFn = (route, state) => {
  const roleService = inject(RoleService);
  const routerService = inject(Router);

  if(roleService.getRole() !== 'admin'){
    routerService.navigate(['/access-denied']);
    return false;
  }
  return true;
};