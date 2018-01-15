import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CanActivateChild } from '@angular/router/src/interfaces';

@Injectable()
export class AuthRouteGuard implements CanActivate, CanActivateChild {
 
  /**
   * Here we can check the user in session and process further.
   * @param next 
   * @param state 
   */
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return true;
  }

  /**
   * Can Active Chile
   * @param route
   * @param state 
   */
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  /**
   * Here we can write multiple conditions.
   */
  selectBestRoute(): string {
    return '/app/notifications';
  }
}
