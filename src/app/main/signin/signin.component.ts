import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  @ViewChild('signinForm') signinForm: NgForm;
  constructor() {}

  ngOnInit(): void {}

  handleSignin(): void {
    console.log(this.signinForm.value)
  }
}
