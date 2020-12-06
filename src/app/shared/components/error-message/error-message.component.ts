import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
})
export class ErrorMessageComponent implements OnInit {
  @Input() validator: FormControl;
  @Input() name: string;

  messages = {
    taiKhoan: {
      required: 'Tài khoản không được để trống',
      minlength: 'Tài khoản ít nhất 3 ký tự',
      maxlength: 'Tài khoản nhiều nhất 20 ký tự',
    },
    matKhau: {
      required: 'Mật khẩu không được để trống',
      pattern:
        'Mật khẩu ít nhất 8 ký tự và có 1 ký tự hoa, 1 ký tự thường và 1 số',
    },
    email: {
      required: 'Email không được để trống',
      email: 'Email không đúng định dạng',
    },
    hoTen: {
      required: 'Họ tên không được để trống',
    },
    soDt: {
      required: 'Số điện thoaij không được để trống',
    },
  };
  constructor() {}

  ngOnInit(): void {}
}
