import { Component, OnInit, ViewChild } from '@angular/core';
import { DanhSachDangChonComponent } from './danh-sach-dang-chon/danh-sach-dang-chon.component';
import { DanhSachGheComponent } from './danh-sach-ghe/danh-sach-ghe.component';
@Component({
  selector: 'app-baitap8',
  templateUrl: './baitap8.component.html',
  styleUrls: ['./baitap8.component.scss'],
})
export class Baitap8Component implements OnInit {
  @ViewChild('danhSachDangChon')
    danhSachDangChonComponent = new DanhSachDangChonComponent();
  @ViewChild('danhSachGhe')
    danhSachGheComponent = new DanhSachGheComponent();
  constructor() {}

  ngOnInit(): void {}

  handleSelect(seat: any) {
    // ViewChild tới danh-sach-dang-chon component và gọi hàm handleSelect
    this.danhSachDangChonComponent.handleSelect(seat);
  }

  handleRemove(seatId: number) {
    // ViewChild tới danh-sach-ghe component và gọi hàm handleRemove
    this.danhSachGheComponent.handleRemove(seatId);
  }
}
