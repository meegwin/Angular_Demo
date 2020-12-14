import { Component, OnInit } from '@angular/core';
import { AuthenService } from 'src/app/core/services/authen.service';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  userInfo: any = null;
  constructor(private auth: AuthenService) {}

  ngOnInit(): void {
    // Lấy giá trị userInfo từ AuthenService về

    // Chỉ lấy đc 1 lần duy nhất, nếu userInfo trên service thay đổi thì component không thể biết được để thay đổi theo
    // this.userInfo = this.auth.userInfo.value;

    this.auth.userInfo.asObservable().subscribe({
      next: (result) => {
        // Đảm bảo result luôn là giá trị userInfo mới nhất
        this.userInfo = result;
      },
    });
  }
}
