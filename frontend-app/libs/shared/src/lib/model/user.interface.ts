export type UserType = 'ADMIN' | 'BASIC' | 'GUEST';

export interface User {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  userType: UserType;
  token?: string;
}
