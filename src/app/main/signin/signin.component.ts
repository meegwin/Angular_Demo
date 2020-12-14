import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenService } from 'src/app/core/services/authen.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  @ViewChild('signinForm') signinForm: NgForm;
  constructor(private router: Router, private auth: AuthenService) {}

  ngOnInit(): void {}

  handleSignin(): void {
    if (this.signinForm.invalid) return;

    console.log(this.signinForm.value);
    this.auth.signin(this.signinForm.value).subscribe({
      next: (result) => {
        // Đăng nhập thành công
        console.log(result);
        // Lưu thông tin user xuống localstorage
        localStorage.setItem('user', JSON.stringify(result));
        // Set lại giá trị của biến userInfo trong AuthenService
        this.auth.userInfo.next(result);
        this.router.navigate(['/']);
      },
    });
  }
}
