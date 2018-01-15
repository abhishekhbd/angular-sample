import { Injectable } from '@angular/core';
import { AppMenu } from './app-menu';
import { AppMenuItem } from './app-menu-item';

@Injectable()
export class AppNavigationService {

  constructor() { }

  /**
   * Get all the Menu Items.
   */
  getMenu() : AppMenu{

    return new AppMenu('Menu 1', 'Menu 1', [
      new AppMenuItem('Dashboard', null, '', '/app/admin'),
      new AppMenuItem('Users', null, '', '/app/admin/users'),
      new AppMenuItem('Sample', null, '', '/app/sample/sample')
    ]);
  }

  checkChildMenuItemPermissions(menuItem): boolean{
    menuItem.array.forEach(element => {
      if(element.permissionName && this.isGranted(element.permissionName)){
        return true;
      }
    });
    return false;
  }

  /**
   * Below Method will be a seperate service that will 
   * check the roles and permission.
   * @param permissionName
   */
  isGranted(permissionName){
    return true;
  }

}
