import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit, OnChanges {
  // @Input() movieAdded: any;
  movieList: any[] = [
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
  constructor() {}
  // Lifecycle hook: theo dõi sự thay đổi của Input
  ngOnChanges(changes: any) {
    // console.log(changes);
    // const { movieAdded } = changes;
    // // Cần kiểm tra previousValue vs currentValue để tránh trường hợp 1 giá trị Input khác thay đổi sẽ chạy lệnh movieList.push
    // if (movieAdded?.previousValue !== movieAdded?.currentValue) {
    //   this.movieList.push(changes.movieAdded.currentValue);
    // }
  }

  ngOnInit(): void {}

  handleDeleteMovie(movieId: number) {
    this.movieList = this.movieList.filter((movie) => {
      return movie.id !== movieId;
    });
  }
}
