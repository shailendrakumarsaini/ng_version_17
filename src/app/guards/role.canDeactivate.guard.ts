import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivateFn, CanActivateFn } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn:'root'
})
export class RoleCanDeactivateGuard implements CanDeactivate<unknown> {

  canDeactivate(component: unknown, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let response = confirm('Are you sure you want to leave!');
    if (response == true) {
      return true;
    } else {
      return false;
    }
  }
}

export const RoleCanDeactivateGuardFn: CanActivateFn = (route, state) => {
  let response = confirm('Are you sure you want to leave!');

  if (response == true) {
    return true;
  } else {
    return false;
  }

};
