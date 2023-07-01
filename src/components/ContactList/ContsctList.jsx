import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact, fetchContacts } from '../../redux/contacts/contactsSlice';
import { ListContainer, ListItem, Avatar, ContactInfo, DeleteButton } from './styledContactList';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.data);
  const filter = useSelector((state) => state.filter);

  const handleDeleteContact = (id) => {
    dispatch(removeContact(id));
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ListContainer>
      {filteredContacts.map((contact) => (
        <ListItem key={contact.id}>
          <Avatar src={contact.avatar} alt={contact.name} />
          <ContactInfo>
            <h3>{contact.name}</h3>
            <p>{contact.number}</p>
          </ContactInfo>
          <DeleteButton onClick={() => handleDeleteContact(contact.id)}>Delete</DeleteButton>
        </ListItem>
      ))}
    </ListContainer>
  );
};

export default ContactList;