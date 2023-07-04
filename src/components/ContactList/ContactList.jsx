import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, removeContact } from '../../redux/contacts/ContactThunks';
import { Box, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, CircularProgress } from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts);
  const isLoading = useSelector((state) => state.contacts.isLoading);
  const error = useSelector((state) => state.contacts.error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDeleteContact = (contactId) => {
    dispatch(removeContact(contactId));
  };

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="200px">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography variant="body1" color="error">
        Error: Something went wrong.
      </Typography>
    );
  }

  return (
     <Box marginTop={3}>
      <Typography variant="h4">Contact List</Typography>
      {contacts.length === 0 ? (
        <Typography variant="body1">No contacts found.</Typography>
      ) : (
        <List>
          {contacts.map((contact) => (
            <ListItem key={contact.id}>
              <ListItemText primary={contact.name} secondary={contact.number} />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteContact(contact.id)}>
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default ContactList;
