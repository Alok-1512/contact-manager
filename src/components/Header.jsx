import React , {useState} from 'react'
import Search from './Search'
import {logo} from '../assets'
import AddContact from './AddContact'
import ListItem from './ListItem'

const Header = () => {
 
  const [contacts , setContacts] = useState([
    { name: 'John Doe', mobile: '555-1234' , id: 1 },
  { name: 'Jane Smith', mobile: '555-5678' , id: 2 },
  { name: 'Bob Johnson', mobile: '555-9012',  id: 3 },
  { name: 'Sarah Williams', mobile: '555-3456' , id: 4 },
  ])

  const [ContactId , SetContactId] = useState();

  function generateUniqueId() {
    
    const randomString = Math.random().toString(36).substring(2, 8);
    
    const timestampString = Date.now().toString(36);
    
    const uniqueId = `${randomString}${timestampString}`;
    return uniqueId;
  }
   

  const AddNewContact = (name , mobile) => {
    if(contacts.findIndex((contact)=> contact.mobile === mobile) === -1){
      setContacts([...contacts , {name , mobile , id: generateUniqueId()}]);
    }
  }
  const getContactId = (id) => {
    SetContactId(id);
  }
  const updateContact = (name , mobile , id) => {
    setContacts((prev) => [
      ...contacts.filter((contact) => contact.id !== id) , {name, mobile, id} ,
    ]);
    console.log(contacts , "updatedContacts")
  };
  const deleteContact = (id) => {
    setContacts((prev) => [
      ...contacts.filter((contact) => contact.id !== id) 
    ]);
    console.log(contacts , "updatedContacts")
  };
  console.log(ContactId , "contactId");
  return (
   <>
   <div className='logo-img'>
    <img src={logo} alt="" />
   </div>
   <AddContact AddNewContact = {AddNewContact} />
   <div className='search-btn'>
   <Search />
   </div>
   <h1>Contacts:</h1>
    {
      contacts.map((contacts ,id)=> <ListItem key={id} ContactName={contacts.name} ContactNumber={contacts.mobile} getContactId={getContactId} contact={contacts} updateContact={updateContact} deleteContact={deleteContact}/>)
    }
   </>
  )
}

export default Header