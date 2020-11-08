/* tslint:disable */
import { BaseEntityRequest } from './base-entity-request';
import { ContactDataRequest } from './contact-data-request';
import { OrganizationRequest } from './organization-request';
export interface ContactDataOrganizationsRequest extends BaseEntityRequest{
  contactData?: ContactDataRequest;
  contactDataId?: string;
  organization?: OrganizationRequest;
  organizationId?: string;
}
