import { TContact } from "./contact.interface";
import { Contact } from "./contact.model";

const createContactMessage = async (data: TContact) => {
  const result = await Contact.create(data);
  return result;
};

const getAllContactMessages = async () => {
  const result = await Contact.find().sort({ createdAt: -1 });
  return result;
};

export const ContactServices = {
  createContactMessage,
  getAllContactMessages,
};
