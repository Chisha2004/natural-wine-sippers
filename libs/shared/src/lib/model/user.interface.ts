export type UserType = 'regular' | 'admin'; //TODO in future we need to breakdown admin types like super-admin, content-admin etc.

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  userType: UserType;
}
//TODO in future we may have an admin user so we need to add userType or role
