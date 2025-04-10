import { Contact } from '@/core/entities/contact'

export interface ContactRepository { 
    createContact(contact: Contact): Promise<boolean>;
    getContacts(): Promise<Contact[]>; 
}