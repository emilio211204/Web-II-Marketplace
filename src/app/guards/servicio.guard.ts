import { CanActivateFn } from '@angular/router';

export const servicioGuard: CanActivateFn = (route, state) => {
  if (localStorage.getItem('login') === 'true') {
    return true;
  } else {
    return false;
  }

};