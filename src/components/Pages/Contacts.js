import { Filter } from '@mui/icons-material'
import ContactList from 'components/ContactList/ContactList'
import ContactForm from 'components/Contactform/Contactform'
import React from 'react'

const Contacts = () => {
  return (
    <div>
          <ContactForm></ContactForm>
          <ContactList></ContactList>
          <Filter></Filter>
    </div>
  )
}

export default Contacts
