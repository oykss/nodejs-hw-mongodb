import { Schema, model } from 'mongoose';

const contactSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    isFavourite: {
      type: Boolean,
      default: false,
    },
    contactType: {
      type: String,
      enum: ['work', 'personal', 'home'],
      default: 'personal',
      required: true,
    },
    photo: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const ContactsCollection = model('contact', contactSchema);
