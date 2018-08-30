export interface ICustomer {
  id?: number;
  firstName?: string;
  lastName?: string;
  email?: string;
  telephone?: string;
}

export const defaultValue: Readonly<ICustomer> = {};
