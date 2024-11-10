import { EventTypeEnumValues } from "./_shared";
import {
  FetchMultiDataRequest,
  FetchMultiDataResponse,
  FilterDataRequest,
  SuccessMessageResponse,
} from "./_shared";

// Events
export interface CreateEventSchema {
  name: string;
  nameSearch: string;
  creatorId: string | null;
  creatorName: string | null;
  creatorImgUrl: string | null;
  eventType: EventTypeEnumValues | string;
  description: string;
  address: string;
  region: string;
  links: string;
  supportFromNetwork: string | null;
  hostHappyHourMeetup: boolean;
  imgUrl?: string | null;
  scheduledDate: Date

}

export interface CreateEventWithFileSchema {
  data: CreateEventSchema;
  file: File;
}

export interface EventSchema extends CreateEventSchema {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}


export interface GetEventsSchema extends FetchMultiDataRequest {}

export interface UpdateEventSchema
  extends Partial<CreateEventSchema> {}

export interface UpdateEventWithFileSchema {
  id: string;
    data: UpdateEventSchema;
    file: File | null;
  }

export interface FilterEventsSchema extends FilterDataRequest {
  nameSearch?: string;
  creatorId?: string;
}

export interface ResponseEventSchema extends SuccessMessageResponse {
  data: EventSchema;
}

export interface ListResponseEventsSchema
  extends FetchMultiDataResponse {
  data: EventSchema[];
}



