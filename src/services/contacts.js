import { SORT_ORDER } from '../constants/index.js';

import { ContactsCollection } from '../db/models/contacts.js';

import { calculatePaginationData } from '../utils/calculatePaginationData.js';

export const getAllContacts = async ({
  userId,
  page = 1,
  perPage = 10,
  sortOrder = SORT_ORDER.ASC,
  sortBy = '_id',
  filter = {},
}) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;

  const contactsQuery = ContactsCollection.find({ userId });

  const contactsCount = await ContactsCollection.countDocuments(contactsQuery);

  if (filter.type) contactsQuery.where('contactType').eq(filter.type);

  if (filter.isFavourite)
    contactsQuery.where('isFavourite').eq(filter.isFavourite);

  const contacts = await contactsQuery
    .skip(skip)
    .limit(limit)
    .sort({ [sortBy]: sortOrder })
    .exec();

  const paginationData = calculatePaginationData(contactsCount, perPage, page);

  return {
    data: contacts,
    ...paginationData,
  };
};

export const getContactById = async (userId, contactId) =>
  await ContactsCollection.findOne({ userId, _id: contactId });

export const createContact = async payload =>
  await ContactsCollection.create(payload);

export const updateContact = async ({
  userId,
  contactId,
  payload,
  photo,
  options = {},
}) => {
  const result = await ContactsCollection.findOneAndUpdate(
    { _id: contactId, userId },
    { ...payload, photo },
    {
      new: true,
      includeResultMetadata: true,
      ...options,
    }
  );

  if (!result || !result.value) return null;

  return {
    contact: result.value,
    isNew: Boolean(result?.lastErrorObject?.upserted),
  };
};

export const deleteContact = async (userId, contactId) =>
  await ContactsCollection.findOneAndDelete({
    userId,
    _id: contactId,
  });
