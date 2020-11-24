import { Component, OnInit, ViewChild } from '@angular/core';
import { MovieListComponent } from './movie-list/movie-list.component';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  @ViewChild('movieList') movieListComponent = new MovieListComponent();
  movieAdded: any;
  constructor() {}

  ngOnInit(): void {}

  handleAddMovie(movie: any) {
    // Cách 1: Truyền Input
    // this.movieAdded = movie
    // Cách 2: Sử dụng ViewChild
    this.movieListComponent.movieList.push(movie)
  }
}
