import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MenuHelper {
    private appPages = [{
        title: 'Rooms',
        url: '/chat/rooms/dashboard',
        icon: 'mail'
      },
      {
        title: 'Contacts',
        url: '/chat/contacts/dashboard',
        icon: 'people'
      }];

      public getPages() {
          return this.appPages;
      }
}
