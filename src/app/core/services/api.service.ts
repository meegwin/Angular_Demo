import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  BASE_URL: string = 'https://movie0706.cybersoft.edu.vn/api';

  constructor(private http: HttpClient) {}

  handleError(error: any) {
    switch (error.status) {
      case 500:
        console.log('Lỗi server');
        break;
      case 401:
        // Logout, clear localStorage
        console.log('Chưa đăng nhập để sử dụng api');

      default:
        break;
    }
    return throwError(error);
  }

  get<T>(path: string, options = {}): Observable<T> {
    return this.http
      .get<T>(`${this.BASE_URL}/${path}`, options)
      .pipe(catchError((err) => this.handleError(err)));
  }

  post<T>(path: string, data: any, options = {}): Observable<T> {
    return this.http
      .post<T>(`${this.BASE_URL}/${path}`, data, options)
      .pipe(catchError((err) => this.handleError(err)));
  }

  put<T>(path: string, data: any, options = {}): Observable<T> {
    return this.http
      .put<T>(`${this.BASE_URL}/${path}`, data, options)
      .pipe(catchError((err) => this.handleError(err)));
  }

  delete<T>(path: string, options = {}): Observable<T> {
    return this.http
      .delete<T>(`${this.BASE_URL}/${path}`, options)
      .pipe(catchError((err) => this.handleError(err)));
  }
}
