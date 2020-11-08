/* tslint:disable */
import { BaseEntityRequest } from './base-entity-request';
import { OrganizationRequest } from './organization-request';
import { UserRequest } from './user-request';
export interface UserOrganizationsRequest extends BaseEntityRequest{
  contactDataId?: string;
  organization?: OrganizationRequest;
  organizationId?: string;
  user?: UserRequest;
}
