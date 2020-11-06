import { ApplicationRef, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactFindOptions } from '@ionic-native/contacts/ngx';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { NavController } from '@ionic/angular';
import { BaseComponent } from 'src/app/shared/base.component';
import { AuthHelper } from 'src/app/shared/helpers/auth.helper';
import { ContactRequest, ContactResponse, GetContactDataRequest } from 'src/swagger/models';
import { ContactService } from 'src/swagger/services';

@Component({
  selector: 'app-contact-dashboard',
  templateUrl: './contact-dashboard.component.html',
  styleUrls: ['./contact-dashboard.component.scss'],
})
export class ContactDashboardComponent extends BaseComponent implements OnInit {

  public contacts: ContactResponse[];
  constructor(
    public keyboard: Keyboard, public AppR: ApplicationRef, public router: Router, public cd: ChangeDetectorRef,
    private contactService: ContactService, private authHelper: AuthHelper,
    public navController: NavController
  ) {
    super(keyboard, AppR, router, cd, navController);
    this.contacts = new Array<ContactResponse>();
  }

  ngOnInit() {
    this.initData();
  }

  public initData() {
    this.getContactsData();
  }

  public getContactsData() {
    const request = {
      skipCount: this.contacts.length,
      userId: this.authHelper.getUser().id
    } as GetContactDataRequest;
    this.contactService.ContactGetContactData(request).subscribe((result: ContactResponse[]) => {
      this.contacts = result;
      this.refresh();
    }, err => {
      this.refresh();
    });
  }

  public syncContacts() {
    if (this.contacts.length > 0) {
      return;
    }
    const options = {
      filter: '',
      multiple: true,
      desiredFields: [],
      hasPhoneNumber: true
    } as ContactFindOptions;
    (navigator as any).contacts.find(['*'], this.onSuccess, err => console.log(err), options);
  }

  onSuccess(contacts) {
    console.log(contacts);
    this.mapContacts(contacts);
  }

  mapContacts(contacts): Array<ContactRequest> {
    const contactsRequest = new Array<ContactRequest>();
    contacts.forEach(contact => {
      const contactRequest = {
        userId: this.authHelper.getUser().id
      } as ContactRequest;
      contactsRequest.push(contactRequest);
    });

    return contactsRequest;
  }
}
