// Member Projects
export interface CreateMemberProjectSchema {
  title: string;
  description: string;
  link: string;
}

export interface MemberProjectSchema extends CreateMemberProjectSchema {
  id: string;
  dateCreated: any;
}