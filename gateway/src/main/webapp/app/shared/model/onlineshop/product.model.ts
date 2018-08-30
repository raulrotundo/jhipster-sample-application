import { Moment } from 'moment';

export interface IProduct {
  id?: number;
  title?: string;
  keywords?: string;
  description?: string;
  rating?: number;
  dateAdded?: Moment;
  dateModified?: Moment;
}

export const defaultValue: Readonly<IProduct> = {};
