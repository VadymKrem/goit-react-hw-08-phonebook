import { createSelector } from '@reduxjs/toolkit';

export const getContactsList = state => state.contacts;
export const getContactsFilter = state => state.filter;
export const getVisibleContacts = createSelector(
  [getContactsList, getContactsFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);
