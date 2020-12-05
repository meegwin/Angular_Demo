import {
  Component,
  OnInit,
  Input,
  OnChanges,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit, OnChanges {
  @Output() onSelect = new EventEmitter();
  @Input() currentPage: number;
  @Input() totalPages: number;
  pages: number[] = [];

  // Cần [1,2,3,4,5]

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: any): void {
    if (changes.totalPages.currentValue !== changes.totalPages.previousValue) {
      this.pages = Array.from(Array(this.totalPages)).map((_, index) => {
        return index + 1;
      });
    }
  }

  handleChange(page: number) {
    //  Output page ra component cha
    this.onSelect.emit(page);
  }
}
