import { SuccessMessageResponse } from "./_shared";

export interface DBInfoAggregatorSchema {
  events: number;
  event_drafts: number;
  network_members: number;
  waitlist: number;
  resources: number;
}

export interface ResponseDBInfoAggregatorSchema extends SuccessMessageResponse {
  data: DBInfoAggregatorSchema;
}
