import React from 'react'
import { useState } from 'react';

const EditContactModal = ({onClose , contact, updateContact}) => {
  const [name , setName] = useState(contact ? contact.name : "");
  const [number , setNumber] = useState(contact ? contact.mobile : "");
  const onSubmit = (e) => {
    e.preventDefault();
    if(contact) {
      updateContact(name , number , contact.id);
    } else {
      addNewContact(name, number );
    }
    onClose();
  }
  return (
    <>
    <div className="editContactForm">
        <form >
            <span><label htmlFor="name"> Enter Name :</label> <br />
            <input type="text" id='name' value={name} onChange={(e) => setName(e.target.value) }  /></span>
            <span><label htmlFor="mob">Enter Mobile Number:</label><br />
            <input type="tel" id='mob' value={number} onChange={(e) => setNumber(e.target.value) } /></span>
               <div className="btnContainer">
             <button type='submit' onClick={onSubmit} >
               Edit Contact
             </button>
             <button type='button' onClick={onClose}>
               Cancel
             </button>
             </div>
        </form>
    </div>
    </>
  )
}

export default EditContactModal;