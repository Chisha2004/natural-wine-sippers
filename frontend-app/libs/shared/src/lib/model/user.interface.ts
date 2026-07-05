export enum UserType {
  ADMIN = 'ADMIN',
  BASIC = 'BASIC',
  GUEST = 'GUEST',
}

export interface User {
  uuid: string;
  email: string;
  firstName?: string;
  lastName?: string;
  userType: UserType;
  token?: string;
}
