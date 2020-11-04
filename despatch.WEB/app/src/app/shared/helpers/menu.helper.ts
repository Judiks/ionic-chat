import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MenuHelper {
    private appPages = [{
        title: 'Rooms',
        url: '/rooms',
        icon: 'mail'
      },
      {
        title: 'Contacts',
        url: '/chat/contacts',
        icon: 'people-outline'
      }];

      public getPages() {
          return this.appPages;
      }
}
