import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Movie } from '../models/movie';
import { Observable, BehaviorSubject } from 'rxjs';

import { ApiService } from './api.service';

@Injectable({
  // Từ phiên bản angular 6, không cần import services vào AppModule và gắn vào trong providers, vì providedIn: 'root' đã giúp angular import dùm
  providedIn: 'root',
})
export class MovieService {
  movieList = new BehaviorSubject([]);

  constructor(private http: ApiService) {}

  getMovieList(): Observable<Movie[]> {
    const url = 'QuanLyPhim/LayDanhSachPhim?maNhom=GP01';

    return this.http.get<Movie[]>(url);
  }

  getMovieDetail(movieId: string): Observable<any> {
    const url = `QuanLyPhim/LayThongTinPhim`;

    let params = new HttpParams();
    params = movieId ? params.append('maPhim', movieId) : params;

    return this.http.get(url, { params });
  }

  // currentPage: số page
  // pageSize: số phần tử trên 1 page
  getMovieListPaging(currentPage: number, pageSize: number): Observable<any> {
    const url = 'QuanLyPhim/LayDanhSachPhimPhanTrang';

    let params = new HttpParams();
    params = currentPage
      ? params.append('soTrang', currentPage.toString())
      : params;
    params = pageSize
      ? params.append('soPhanTuTrenTrang', pageSize.toString())
      : params;
    params = params.append('maNhom', 'GP01');

    return this.http.get(url, { params });
  }

  // getMovieList(): Movie[] {
  //   return [
  //     {
  //       id: 1,
  //       name: 'One punch man',
  //       price: 80000,
  //       image: 'assets/images/one-punch-man.jpeg',
  //     },
  //     {
  //       id: 2,
  //       name: 'Iron man',
  //       price: 80000,
  //       image: 'assets/images/iron-man.jpeg',
  //     },
  //     {
  //       id: 3,
  //       name: 'Wonder woman',
  //       price: 80000,
  //       image: 'assets/images/wonder-woman.jpeg',
  //     },
  //   ];
  // }

  // getMovieListPromise() {
  //   return new Promise((resolve, reject) => {
  //     // Fake api
  //     setTimeout(() => {
  //       // Trả ra kết quả trong .then
  //       resolve(['iron-man', 'wonder-woman']);

  //       // Trả ra lỗi trong .catch
  //       // reject('Wrong!!!!!!!')
  //     }, 2000);
  //   });
  // }

  // getMovieListObservable() {
  //   return new Observable((subscribe) => {
  //     // Fake API
  //     setTimeout(() => {
  //       // Truyền kết quả
  //       subscribe.next(['iron-man', 'wonder-woman']);

  //       // Truyền lỗi
  //       // subscribe.error('Wrong!!!!!!!')

  //       // Kết thúc Observable
  //       subscribe.complete()
  //     }, 2000);
  //   });
  // }
}
