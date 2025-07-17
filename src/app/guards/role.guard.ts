import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const allowedRoles: string[] = route.data['roles'];
    const role = localStorage.getItem('role');

    if (role && allowedRoles.includes(role)) {
      return true;
    }

    this.router.navigate(['/auth/login']); // or a 'not-authorized' page
    return false;
  }
}
