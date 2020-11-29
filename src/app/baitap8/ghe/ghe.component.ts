import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ghe',
  templateUrl: './ghe.component.html',
  styleUrls: ['./ghe.component.scss'],
})
export class GheComponent implements OnInit {
  @Input() seat: any;
  @Output() onSelect = new EventEmitter();
  // Quản lý trạng thái của ghế
  isSelect: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  handleSelect() {
    this.isSelect = !this.isSelect;
    // Cần truyền thêm biến isSelect, để xác định nên thêm vào hay xoá đi ghế này ở danh-sach-dang-chon
    this.onSelect.emit({ ...this.seat, isSelect: this.isSelect });
  }
}









