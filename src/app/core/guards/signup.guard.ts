import { Injectable } from '@angular/core';
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { SignupComponent } from '../../main/signup/signup.component';

@Injectable({
  providedIn: 'root',
})
export class SignupGuard implements CanDeactivate<SignupComponent> {
  canDeactivate(
    component: SignupComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // return về true => cho phép rời khởi component

    // Kiểm tra form đã bị thay đổi hay chưa
    const isDirty = component.signupForm.dirty;
    const isSubmitted = component.submitted;

    if (isDirty && !isSubmitted) {
      // form đã bị thay đổi => hiện cái thông báo
      return confirm('Bạn có chắc muốn rời khỏi!!!!');
    }

    return true;
  }
}
