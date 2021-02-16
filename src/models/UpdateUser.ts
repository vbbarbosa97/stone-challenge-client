export interface IRequestUpdateUser {
  id?: string;
  name: string;
  email: string;
  password?: string;
  oldPassword?: string;
}
