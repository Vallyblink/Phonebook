
import ContactList from 'components/ContactList/ContactList'
import ContactForm from 'components/Contactform/Contactform'
import Filter from 'components/Filter/Filter'
import React from 'react'

const Contacts = () => {
  return (
    <div>
          <ContactForm></ContactForm>
          <Filter></Filter>
          <ContactList></ContactList>
         
    </div>
  )
}

export default Contacts
