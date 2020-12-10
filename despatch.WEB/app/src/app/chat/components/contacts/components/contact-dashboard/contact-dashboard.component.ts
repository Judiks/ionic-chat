import { ApplicationRef, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactFindOptions } from '@ionic-native/contacts/ngx';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { NavController } from '@ionic/angular';
import { BaseComponent } from 'src/app/shared/base.component';
import { AuthHelper } from 'src/app/shared/helpers/auth.helper';
import { RoomHelper } from 'src/app/shared/helpers/room.helper';
import {
  AddressRequest,
  AddressType,
  ContactDataAddressesRequest,
  ContactDataImagesRequest,
  ContactDataOrganizationsRequest,
  ContactDataPhoneNumbersRequest,
  ContactDataRequest,
  ContactDataUrlsRequest,
  ContactResponse,
  CreateRoomFromContactRequest,
  GetContactDataRequest,
  GetRoomByContactRequest,
  ImageRequest,
  OrganizationRequest,
  PhoneNumberRequest,
  RoomResponse,
  SyncContactRequest,
  SyncContactResponse,
  UrlRequest
} from 'src/swagger/models';
import { ContactService, RoomService } from 'src/swagger/services';

@Component({
  selector: 'app-contact-dashboard',
  templateUrl: './contact-dashboard.component.html',
  styleUrls: ['./contact-dashboard.component.scss'],
})
export class ContactDashboardComponent extends BaseComponent implements OnInit {

  public contacts: ContactResponse[];

  constructor(
    public keyboard: Keyboard, public AppR: ApplicationRef, public router: Router,
    private contactService: ContactService, private authHelper: AuthHelper,
    public navController: NavController, private roomService: RoomService,
    public roomHelper: RoomHelper
  ) {
    super(keyboard, AppR, router, navController);
    this.contacts = new Array<ContactResponse>();
  }

  ngOnInit() {
    this.initData();
  }

  public initData() {
    this.colors = new Array<string>();
    if (this.contacts.length === 0) {
      this.getContactsData(null);
    }

  }

  public getContactsData(event) {
    const request = {
      skipCount: this.contacts.length,
      userId: this.authHelper.getUser().id
    } as GetContactDataRequest;

    this.contactService.ContactGetContactData(request).subscribe((result: ContactResponse[]) => {
      console.log(result);
      this.contacts = [...this.contacts, ...result];
      this.contacts.forEach(x => {
        this.colors.push(this.getRandomColor());
      });
      if (event) {
        event.target.complete();
      }
    }, err => {
      console.log(err);
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
    (navigator as any).contacts.find(['*'],
      (contacts) => {
        console.log(contacts);
        const contactsRequest = this.mapContacts(contacts);
        this.contactService.ContactSaveAllFromNative(contactsRequest).subscribe((result: SyncContactResponse[]) => {
          this.contacts = result;
        },
          err => {
            console.log(err);
          });
      },
      err => console.log(err), options);
  }

  private mapContacts(contacts): Array<SyncContactRequest> {
    const contactsRequest = new Array<SyncContactRequest>();
    if (contacts) {
      contacts.forEach(contact => {
        const contactRequest = {
          userId: this.authHelper.getUser().id,
          contactData: this.mapContactData(contact),
        } as SyncContactRequest;
        contactsRequest.push(contactRequest);
      });
    }
    return contactsRequest;
  }

  private mapContactData(contact): ContactDataRequest {
    const contactData = {
      displayName: contact.displayName,
      firstName: contact.name.givenName,
      lastName: contact.name.familyName,
      middleName: contact.name.middleName,
      honorificPrefix: contact.name.honorificPrefix,
      honorificSuffix: contact.name.honorificSuffix,
      addresses: this.mapAddresses(contact),
      images: this.mapImages(contact),
      organizations: this.mapOrganizations(contact),
      phoneNumbers: this.mapPhoneNumbers(contact),
      urls: this.mapUrls(contact)
    } as ContactDataRequest;
    return contactData;
  }

  private mapAddresses(contact): ContactDataAddressesRequest[] {
    const contactAddresses = new Array<ContactDataAddressesRequest>();
    if (contact.addresses) {
      contact.addresses.forEach(address => {
        const addressRequest = {
          address: {
            deviceName: address.streetAddress,
            type: 0 as AddressType
          } as AddressRequest
        } as ContactDataAddressesRequest;
        contactAddresses.push(addressRequest);
      });
    }
    return contactAddresses;
  }

  private mapImages(contact): ContactDataImagesRequest[] {
    const contactImages = new Array<ContactDataImagesRequest>();
    if (contact.photos) {
      contact.photos.forEach(image => {
        const imageRequest = {
          image: {
            deviceUrl: {
              path: image.value,
              type: 3
            } as UrlRequest,
            isMain: true,
            type: 0
          } as ImageRequest
        } as ContactDataImagesRequest;
        contactImages.push(imageRequest);
      });
    }
    return contactImages;
  }

  private mapOrganizations(contact): ContactDataOrganizationsRequest[] {
    const contactOrganizations = new Array<ContactDataOrganizationsRequest>();
    if (contact.organizations) {
      contact.organizations.forEach(organization => {
        const organizationRequest = {
          organization: {
            name: organization.name,
            position: organization.title
          } as OrganizationRequest
        } as ContactDataOrganizationsRequest;
        contactOrganizations.push(organizationRequest);
      });
    }
    return contactOrganizations;
  }

  private mapPhoneNumbers(contact): ContactDataPhoneNumbersRequest[] {
    const contactPhoneNumbers = new Array<ContactDataPhoneNumbersRequest>();
    if (contact.phoneNumbers) {
      contact.phoneNumbers.forEach(phoneNumber => {
        const phoneNumberRequest = {
          phoneNumber: {
            number: phoneNumber.value
          } as PhoneNumberRequest
        } as ContactDataPhoneNumbersRequest;
        contactPhoneNumbers.push(phoneNumberRequest);
      });
    }
    return contactPhoneNumbers;
  }

  private mapUrls(contact): ContactDataUrlsRequest[] {
    const contactUrls = new Array<ContactDataUrlsRequest>();
    if (contact.urls) {
      contact.urls.forEach(url => {
        const urlRequest = {
          url: {
            path: url.value,
            type: 0
          } as UrlRequest
        } as ContactDataUrlsRequest;
        contactUrls.push(urlRequest);
      });
    }
    return contactUrls;
  }

  getPhonetic(contact: ContactResponse): string {
    let result = '';
    if (contact.contactData?.firstName) {
      result += contact.contactData?.firstName.charAt(0);
    }
    if (contact.contactData?.lastName) {
      result += contact.contactData?.lastName.charAt(0);
    }
    if (result.length < 2 && contact.contactData?.middleName) {
      result += contact.contactData?.middleName.charAt(0);
    }
    if (result.length < 1 && contact.contactData?.displayName) {
      result += contact.contactData?.displayName.charAt(0);
    }
    return result;
  }

  joinContactRoom(contact: ContactResponse) {
    const request = { contactId: contact.id } as GetRoomByContactRequest;
    this.roomService.RoomGetRoomByContact(request).subscribe((response: RoomResponse) => {
      const createRequest = JSON.parse(JSON.stringify({ contact })) as CreateRoomFromContactRequest;
      if (!response) {
        this.roomService.RoomCreateFromContact(createRequest).subscribe((response2: RoomResponse) => {
          this.roomHelper.setRoom(response2);
          this.redirectToRoom();
        });
      } else {
        this.roomHelper.setRoom(response);
        this.redirectToRoom();
      }
    });

  }
}
