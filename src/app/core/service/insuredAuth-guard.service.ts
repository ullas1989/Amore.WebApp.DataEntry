import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable()
export class InsuredAuthGuardService implements CanActivate {
  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot) {
    if (true) {
      return true;
    } else {
      return false;
    }
  }
}
