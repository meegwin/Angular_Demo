import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/core/models/movie';
import { MovieService } from 'src/app/core/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  movieList: Movie[] = [];
  // Phải khai báo trong constructor mới có thể sử dụng service trong component
  constructor(private movieService: MovieService) {}

  // Tương đương với componentDidMount bên React
  // Chạy 1 lần sau khi render
  // Thích hợp để: call API, tương tác với DOM, event
  ngOnInit(): void {
    // this.movieList = this.movieService.getMovieList()
    // console.log(this.movieList)

    // this.movieService
    //   .getMovieListPromise()
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    this.movieService.getMovieListObservable().subscribe({
      // next: Nhận kết quả
      next: (result) => {
        console.log(result)
      },
      // error: Nhận lỗi
      error: (error) => {
        console.log(error)
      },
      // complete: kết thúc observalbe
      complete: () => {
        console.log('DONE')
      }
    })
  }
}











