/* tslint:disable */
import { BaseEntityResponse } from './base-entity-response';
import { ContactDataResponse } from './contact-data-response';
import { OrganizationResponse } from './organization-response';
export interface ContactDataOrganizationResponse extends BaseEntityResponse{
  contactData?: ContactDataResponse;
  contactDataId?: string;
  organization?: OrganizationResponse;
  organizationId?: string;
}
