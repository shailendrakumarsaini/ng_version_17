
import { inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { RoleService } from './../services/role.service';
import { Observable } from "rxjs";
import { User } from "../models/user.model";

@Injectable({
  providedIn:'root'
})
export class RoleResolveGuard implements Resolve<User> {

  constructor(private roleService : RoleService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<User> | Promise<User> | User {
    return this.roleService.getId();
  }

}

export const RoleResolveGuardFn: ResolveFn<User> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const roleService = inject(RoleService);

  return roleService.getId();
};
