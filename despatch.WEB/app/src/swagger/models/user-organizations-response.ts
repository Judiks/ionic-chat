/* tslint:disable */
import { BaseEntityResponse } from './base-entity-response';
import { OrganizationResponse } from './organization-response';
import { UserResponse } from './user-response';
export interface UserOrganizationsResponse extends BaseEntityResponse{
  contactDataId?: string;
  organization?: OrganizationResponse;
  organizationId?: string;
  user?: UserResponse;
}
