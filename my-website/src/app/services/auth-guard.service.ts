import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _router: Router) {

  }

  canActivate() {
    console.log(localStorage.getItem('loggedIn'));
    if (localStorage.getItem('loggedIn') === '1') {
      return true;
    } else {
      this._router.navigate(['/login']);
      return false;
    }
  }

}
