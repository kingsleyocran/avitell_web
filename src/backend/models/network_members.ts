import {
  FetchMultiDataRequest,
  FetchMultiDataResponse,
  FilterDataRequest,
  ProfessionEnumValues,
  SuccessMessageResponse,
} from "./_shared";
import { MemberProjectSchema } from "./member_projects";

export interface CreateNetworkMemberSchema {
  fullName: string;
  fullNameSearch: string;
  emailAddress: string;
  additionalContactLinks: string;
  docSocNotes: string | null;
  imgUrl: string | null; 
  pronouns: string | null; //#
  profession: ProfessionEnumValues[];
  otherProfession: string | null;
  mediums: string;
  location: string;
  languages: string;
  additionalGeographyExpertise: string[] | null;
  biography: string;
  projectText: string | null;
  currentProjects: MemberProjectSchema[] | null;
  relevantProjects: MemberProjectSchema[] | null;
  desireFromCommunity: string;
  learnAboutGroup: string;
  languageConcerns: string | null;
  labTrigger: string | null;
  participatedIn: string | null;

  randomNumber?: number;
}

export interface CreateNetworkMemberWithFileSchema {
  data: CreateNetworkMemberSchema;
  file: File;
}

export interface NetworkMembersSchema extends CreateNetworkMemberSchema {
  id: string;
  authId: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface NetworkMembersJsonSchema {
  id: string;
  fullName: string;
  emailAddress: string;
  profession: ProfessionEnumValues[];
  otherProfession: string | null;
  imgUrl: string;
}

export interface GetNetworkMembersSchema extends FetchMultiDataRequest {}

export interface UpdateNetworkMemberSchema
  extends Partial<CreateNetworkMemberSchema> {}

export interface UpdateNetworkMemberWithFileSchema {
  id: string;
    data: UpdateNetworkMemberSchema;
    file: File | null;
  }

export interface FilterNetworkMembersSchema extends FilterDataRequest {
  fullNameSearch?: string;
  email?: string;
  profession?: ProfessionEnumValues[];
  languages?: string;
  randomNumber?: number;
}

export interface ResponseNetworkMemberSchema extends SuccessMessageResponse {
  data: NetworkMembersSchema;
}

export interface ListResponseNetworkMembersSchema
  extends FetchMultiDataResponse {
  data: NetworkMembersSchema[];
}

export interface ListResponseNetworkMembersJsonSchema
  extends FetchMultiDataResponse {
  data: NetworkMembersJsonSchema[];
}
