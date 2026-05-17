export type UserType = 'regular' | 'admin'; //TODO in future we need to breakdown admin types like super-admin, content-admin etc.

export interface User {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  // userType: UserType;  //TODO currrently we don't have different user types but in future we may have admin users so we need to add this field
  token?: string; //TODO we may need to add token in future when we implement authentication and authorization
}
//TODO in future we may have an admin user so we need to add userType or role
