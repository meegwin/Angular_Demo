import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/core/services/movie.service';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  movieDetail: any;
  loading: boolean = false;
  error: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    // Cần lấy mã phim từ trên url xuống
    this.activatedRoute.params.subscribe({
      next: (params) => {
        console.log(params);
        // Gọi API lấy thông tin phim
        this.loading = true
        this.movieService.getMovieDetail(params.movieId).subscribe({
          next: (result) => {
            this.movieDetail = result;
            this.loading = false
          },
          error: err => {
            this.loading = false
            this.error = err.error
          }
        });
      },
    });
  }
}
