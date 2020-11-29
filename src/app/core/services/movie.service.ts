import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import { Observable } from 'rxjs';

@Injectable({
  // Từ phiên bản angular 6, không cần import services vào AppModule và gắn vào trong providers, vì providedIn: 'root' đã giúp angular import dùm
  providedIn: 'root',
})
export class MovieService {
  constructor() {}

  getMovieList(): Movie[] {
    return [
      {
        id: 1,
        name: 'One punch man',
        price: 80000,
        image: 'assets/images/one-punch-man.jpeg',
      },
      {
        id: 2,
        name: 'Iron man',
        price: 80000,
        image: 'assets/images/iron-man.jpeg',
      },
      {
        id: 3,
        name: 'Wonder woman',
        price: 80000,
        image: 'assets/images/wonder-woman.jpeg',
      },
    ];
  }

  getMovieListPromise() {
    return new Promise((resolve, reject) => {
      // Fake api
      setTimeout(() => {
        // Trả ra kết quả trong .then
        resolve(['iron-man', 'wonder-woman']);

        // Trả ra lỗi trong .catch
        // reject('Wrong!!!!!!!')
      }, 2000);
    });
  }

  getMovieListObservable() {
    return new Observable((subscribe) => {
      // Fake API
      setTimeout(() => {
        // Truyền kết quả
        subscribe.next(['iron-man', 'wonder-woman']);

        // Truyền lỗi
        // subscribe.error('Wrong!!!!!!!')

        // Kết thúc Observable
        subscribe.complete()
      }, 2000);
    });
  }
}




