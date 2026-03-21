import { CanActivateFn } from '@angular/router';

export const adminAuthGuard: CanActivateFn = (route, state) => {
  //TODO If not logged in then we should never load admin
  //We do not redirect to login to avoid user navigating here by accident
  //When logged in use is admin they will be automatically be able to load admin related pages
  return true;
};
