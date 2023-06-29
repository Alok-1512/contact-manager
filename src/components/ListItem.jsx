import React from 'react';
import { userImg, trash } from '../assets';
import EditContact from './EditContact';

const ListItem = ({ ContactName, ContactNumber , getContactId , contact , updateContact, deleteContact}) => {

  const updatehandler = (id) => {
    getContactId(id); 
  }

  const deleteHandler = (id) => {
    deleteContact(id);
  }
  return (
    <>
      <div className="ListItem">
        <img src={userImg} alt="" srcSet="" />
        <div className="contact-detail">
          <h3>{ContactName}</h3>
          <p>{ContactNumber}</p>
        </div>
        <div className="btn-row">
          <button onClick={() => deleteHandler(contact.id)}>
            <img src={trash} alt="" srcSet="" />
          </button>
        </div>
        <EditContact updatehandler={updatehandler} contact={contact} updateContact={updateContact}/>
      </div>
    </>
  );
};

export default ListItem;
