export interface IAddress {
  id?: number;
  address1?: string;
  address2?: string;
  city?: string;
  postcode?: string;
  country?: string;
}

export const defaultValue: Readonly<IAddress> = {};
