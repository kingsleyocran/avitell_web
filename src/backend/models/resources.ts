import { ResourceLabelEnumValues } from "./_shared";
import {
  FetchMultiDataRequest,
  FetchMultiDataResponse,
  FilterDataRequest,
  SuccessMessageResponse,
} from "./_shared";

// Resources
export interface CreateResourceSchema {
  name: string;
  nameSearch: string;
  link: string;
  label: ResourceLabelEnumValues | string;
}

export interface ResourceSchema extends CreateResourceSchema {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface GetResourcesSchema extends FetchMultiDataRequest {}

export interface UpdateResourceSchema
  extends Partial<CreateResourceSchema> {}

export interface UpdateResourceWithIDSchema {
  id: string;
    data: UpdateResourceSchema;
  }

export interface FilterResourcesSchema extends FilterDataRequest {
  nameSearch?: string;
}

export interface ResponseResourceSchema extends SuccessMessageResponse {
  data: ResourceSchema;
}

export interface ListResponseResourcesSchema
  extends FetchMultiDataResponse {
  data: ResourceSchema[];
}



