import { CONTACT_KEYS, SORT_ORDER } from '../constants/index.js';

const parseSortOrder = sortOrder =>
  Object.values(SORT_ORDER).includes(sortOrder) ? sortOrder : SORT_ORDER.ASC;

const parseSortBy = sortBy => (CONTACT_KEYS.includes(sortBy) ? sortBy : '_id');

export const parseSortParams = query => {
  const { sortOrder, sortBy } = query;

  return {
    sortOrder: parseSortOrder(sortOrder),
    sortBy: parseSortBy(sortBy),
  };
};
