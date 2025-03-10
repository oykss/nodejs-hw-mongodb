import { ContactsCollection } from '../db/models/contacts.js';

export const SORT_ORDER = {
  ASC: 'asc',
  DESC: 'desc',
};

export const CONTACT_KEYS = Object.keys(ContactsCollection.schema.paths);

export const CONTACT_TYPES =
  ContactsCollection.schema.path('contactType').enumValues;
