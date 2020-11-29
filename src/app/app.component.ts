import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'fe52-angular';
  message: string = 'Hello Cybersoft';
  number: number = 0.5;
  price: number = 3000;
  date: Date = new Date();

  obj: any = {
    hoTen: 'Dan',
    lop: 'FE52',
    tuoi: 25,
  };

  numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  message1: string =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt exercitationem consequatur quaerat architecto dicta? Aut, consectetur consequuntur quibusdam aliquid nulla, nostrum accusamus, voluptas quo velit maiores ad veritatis distinctio sed!';
}














