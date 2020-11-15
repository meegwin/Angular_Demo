import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
  message: string = 'Hello Cybersoft'
  isActive: boolean = false
  username: string = ""
  fullName: string = ""
  email: string = ""
  address: string = ""

  constructor() { }

  ngOnInit(): void {
  }

  handleChangeActive(): void {
    this.isActive = !this.isActive
    console.log(this.isActive)
  }

  handleChangeUsername(evt: any): void {
    this.username = evt.target.value
  }

  handleChangeFullName(value: string): void {
    // const fullNamEl = <HTMLInputElement>document.getElementById('fullName')

    // this.fullName = fullNamEl.value

    this.fullName = value
  }

}










