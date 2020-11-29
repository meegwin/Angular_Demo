import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-danh-sach-dang-chon',
  templateUrl: './danh-sach-dang-chon.component.html',
  styleUrls: ['./danh-sach-dang-chon.component.scss'],
})
export class DanhSachDangChonComponent implements OnInit {
  @Output() onRemove = new EventEmitter()
  selectedList: any[] = [];
  constructor() {}
  ngOnInit(): void {}
  handleSelect(seat: any) {
    // Kiếm tra isSelect đang là true hay false
    // true: thêm vào mảng selectedList
    // false: xoá khỏi mảng selectedList
    if (seat.isSelect) {
      this.selectedList.push(seat);
    } else {
      const index = this.selectedList.findIndex(
        (item) => item.id === seat.id
      );
      this.selectedList.splice(index, 1)
    }
  }

  handleRemove(seat: any) {
    // remove ghế khỏi selectedList
    const index = this.selectedList.findIndex(
      (item) => item.id === seat.id
    );
    this.selectedList.splice(index, 1)

    // Phải set trạng thái isSelect của ghế vừa remove thành false => Phải truyền ghế muốn remove lên component baitap8
    this.onRemove.emit(seat.id)
  }
}










