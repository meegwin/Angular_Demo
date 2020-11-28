import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhSachDangChonComponent } from './danh-sach-dang-chon.component';

describe('DanhSachDangChonComponent', () => {
  let component: DanhSachDangChonComponent;
  let fixture: ComponentFixture<DanhSachDangChonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhSachDangChonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhSachDangChonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
