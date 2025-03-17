const commonMessages = {
  name: {
    base: 'Name should be a string',
    min: 'Name should have at least {#limit} characters',
    max: 'Name should have at most {#limit} characters',
    required: 'Name is required',
  },
  email: {
    base: 'Email should be a string',
    min: 'Email should have at least {#limit} characters',
  },
};

export const messages = {
  ...commonMessages,
  phoneNumber: {
    base: 'Phone number should be a string',
    min: 'Phone number should have at least {#limit} digits',
    max: 'Phone number should have at most {#limit} digits',
    required: 'Phone number is required',
  },
  isFavourite: {
    base: 'Favourite status should be true or false',
  },
  contactType: {
    base: 'Contact type should be a string',
    only: 'Contact type should be one of: work, personal, home',
    required: 'Contact type is required',
  },
  userId: {
    invalid: 'Parent id should be a valid mongo id',
  },
  email: {
    ...commonMessages.email,
    email: 'Email should be a valid email address',
    pattern: 'Email format is invalid',
    required: 'Email is required',
  },
  password: {
    base: 'Password should be a string',
    min: 'Password should have at least {#limit} characters',
    max: 'Password should have at most {#limit} characters',
    required: 'Password is required',
  },
};

export const contactMessages = {
  name: messages.name,
  phoneNumber: messages.phoneNumber,
  email: commonMessages.email,
  isFavourite: messages.isFavourite,
  contactType: messages.contactType,
  userId: messages.userId,
};

export const authMessages = {
  name: messages.name,
  email: messages.email,
  password: messages.password,
};
