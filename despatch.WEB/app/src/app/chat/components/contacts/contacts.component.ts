import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  template: `<ion-router-outlet class='position-absolute w-100 h-100'></ion-router-outlet>`
})
export class ContactsComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
