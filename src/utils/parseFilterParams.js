import { CONTACT_TYPES } from '../constants/index.js';

const parseContactType = type =>
  typeof type === 'string' && CONTACT_TYPES.includes(type) ? type : null;

const parseIsFavourite = isFavourite =>
  typeof isFavourite === 'string' && ['true', 'false'].includes(isFavourite)
    ? isFavourite
    : null;

export const parseFilterParams = queryParams => {
  const { type, isFavourite, query } = queryParams;

  return {
    type: parseContactType(type),
    isFavourite: parseIsFavourite(isFavourite),
    query: query ? query.toString() : null,
  };
};
