import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['../../../../styles/app-layout/profile-page/profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  clickLi() {
    console.log('li click');
  }

  cliskSpan() {
    console.log('user name clicked');
  }
}
