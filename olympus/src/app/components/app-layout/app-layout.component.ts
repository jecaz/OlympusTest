import {Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild} from '@angular/core';
import {User} from '../../model/user.model';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['../../../styles/app-layout/app-layout.component.scss']
})
export class AppLayoutComponent implements OnInit, OnDestroy {
  @ViewChild('backToTop') sectionNeedToScroll: ElementRef;
  users: User[];

  constructor(private userService: UserService, private renderer: Renderer2) {
    this.renderer.addClass(document.body, 'background-layout');
  }

  ngOnInit() {
    this.users = this.userService.getActiveUsers();
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'background-layout');
  }

  public goToSection() {
    this.sectionNeedToScroll.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}