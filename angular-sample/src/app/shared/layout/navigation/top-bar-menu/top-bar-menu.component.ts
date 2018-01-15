import { Component, OnInit } from '@angular/core';
import { AppNavigationService } from '../app-navigation.service';
import { AppMenu } from '../app-menu';

@Component({
  selector: 'app-top-bar-menu',
  templateUrl: './top-bar-menu.component.html',
  styleUrls: ['./top-bar-menu.component.css']
})
export class TopBarMenuComponent implements OnInit {
  menu: AppMenu = null;

  constructor(private _appNavigationService: AppNavigationService) { }

  ngOnInit() {
    this.menu = this._appNavigationService.getMenu();
  }

}
