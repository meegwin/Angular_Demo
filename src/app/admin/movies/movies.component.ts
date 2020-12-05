import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/core/services/movie.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movieList: any[];
  currentPage: number = 1;
  pageSize: number = 10;
  totalPages: number = 0;
  constructor(
    private movieService: MovieService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // subscribe queryParams thay đổi sẽ chạy vào callback next
    // => set lại currentPage và gọi API
    this.activatedRoute.queryParams.subscribe({
      next: (params) => {
        // Giá trị lấy từ trên url luôn là string
        const { page } = params;

        this.currentPage = parseInt(page) || 1;

        this.movieService
          .getMovieListPaging(this.currentPage, this.pageSize)
          .subscribe({
            next: (result) => {
              console.log(result);
              this.totalPages = result.totalPages;
              this.movieList = result.items;
            },
          });
      },
    });
  }

  handleChangePage(page: number) {
    this.router.navigate(['/admin/movies'], {
      queryParams: { page: page },
    });
    // this.currentPage = page;
    // this.movieService
    //   .getMovieListPaging(this.currentPage, this.pageSize)
    //   .subscribe({
    //     next: (result) => {
    //       console.log(result);
    //       this.totalPages = result.totalPages;
    //       this.movieList = result.items;
    //     },
    //   });
  }
}
