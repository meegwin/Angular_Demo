import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ghe',
  templateUrl: './ghe.component.html',
  styleUrls: ['./ghe.component.scss']
})
export class GheComponent implements OnInit {
  @Input() seat: any
  // Quản lý trạng thái của ghế
  isSelect: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  handleSelect() {
    this.isSelect = !this.isSelect
  }

}












