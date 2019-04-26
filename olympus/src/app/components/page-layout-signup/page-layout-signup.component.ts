import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page-layout-signup',
  templateUrl: './page-layout-signup.component.html',
  styleUrls: ['../../../styles/page-layout-signup/page-layout-signup.component.scss']
})
export class PageLayoutSignupComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

}
