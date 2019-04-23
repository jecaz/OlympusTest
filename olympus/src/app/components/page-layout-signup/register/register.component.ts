import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

export interface Gender {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../../../../styles/register/register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: FormGroup;
  gender: Gender[] = [
    {value: 'male', viewValue: 'Male'},
    {value: 'fimale', viewValue: 'Fimale'}
  ];

  constructor() { }

  ngOnInit() {
    this.user = new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      birthday: new FormControl('06/10/1989', Validators.required),
      gender: new FormControl('Male', Validators.required)
    });
  }

}
