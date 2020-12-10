import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MenuHelper {
    private appPages = [
      {
        title: 'Rooms',
        url: '/chat/rooms/dashboard',
        icon: 'mail'
      },
      {
        title: 'Contacts',
        url: '/chat/contacts/dashboard',
        icon: 'people'
      },
      {
        title: 'Download',
        url: '/despatch/download-apk',
        icon: 'cloud-download'
      }];

      public getPages() {
          return this.appPages;
      }
}
