import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // return true => cho phép truy cập vào

    const user = localStorage.getItem('user');

    if (user) {
      // Đã đăng nhập
      const { maLoaiNguoiDung } = JSON.parse(user);

      if (maLoaiNguoiDung === 'QuanTri') {
        // Có quyền admin => cho phép truy cập vào
        return true;
      }

      // Không có quyền admin => chuyển về trang Home
      this.router.navigate(['/']);
      return false;
    }

    // Chưa đăng nhập => chuyển về trang Signin
    this.router.navigate(['/signin']);
    return false;
  }
}
