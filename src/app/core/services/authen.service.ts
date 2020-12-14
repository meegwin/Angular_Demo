import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthenService {
  // BehaviorSubject: đôi tượng dùng để lưu trữ 1 biến toàn cục
  userInfo = new BehaviorSubject(null);
  // this.userInfo = value => sai
  // this.userInfo.next(value): set lại giá trị cho biến userInfo
  // this.userInfo.value: get giá trị của biến userInfo

  // Biến userInfo thành 1 observalbe: this.userInfo.asObservable()
  // this.userInfo.asObservable().subscribe(): theo dõi sự thay đổi giá trị của biến userInfo

  constructor(private http: HttpClient) {}

  signin(values: any): Observable<any> {
    const url =
      'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap';

    return this.http.post(url, values);
  }

  signup(values: any): Observable<any> {
    const url = 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy';

    return this.http.post(url, { ...values, maNhom: 'GP01' });
  }
}
