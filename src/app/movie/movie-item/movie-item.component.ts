import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {
  // Khai báo Input để nhận dữ liệu từ component cha truyền xuống
  @Input() movie: any
  // EventEmitter: đối tượng giúp ta tự định nghĩa 1 sự kiện
  // Output: Đẩy sự kiện lên component cha
  @Output() onDelete = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  handleDeleteMovie() {
    // Cần truyền id của bộ phim muốn xoá lên component cha
    // emit: kích hoạt sự kiện và kèm theo dữ liệu muốn truyền đi
    this.onDelete.emit(this.movie.id)
  }
}

















