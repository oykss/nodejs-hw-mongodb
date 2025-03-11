const parseNumber = (number, defaultValue) => {
  if (typeof number !== 'string') return defaultValue;

  const parsedNumber = +number;

  if (Number.isNaN(parsedNumber)) return defaultValue;

  return parsedNumber;
};

export const parsePaginationParams = query => {
  const { page, perPage } = query;

  return {
    page: parseNumber(page, 1),
    perPage: parseNumber(perPage, 10),
  };
};
