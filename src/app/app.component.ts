import { Component, OnInit } from '@angular/core';
import { AuthenService } from './core/services/authen.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private auth: AuthenService) {}

  ngOnInit(): void {
    const user = localStorage.getItem('user');
    if (user) {
      this.auth.userInfo.next(JSON.parse(user));
    }
  }

  // title = 'fe52-angular';
  // message: string = 'Hello Cybersoft';
  // number: number = 0.5;
  // price: number = 3000;
  // date: Date = new Date();
  // obj: any = {
  //   hoTen: 'Dan',
  //   lop: 'FE52',
  //   tuoi: 25,
  // };
  // numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  // message1: string =
  //   'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt exercitationem consequatur quaerat architecto dicta? Aut, consectetur consequuntur quibusdam aliquid nulla, nostrum accusamus, voluptas quo velit maiores ad veritatis distinctio sed!';
}
