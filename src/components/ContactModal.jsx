import React , {useState} from 'react'

function ContactModal  ({onClose , AddNewContact})  {
    const handleFormSubmit = (event) => {
        onClose();
      };
    const [name , setName] = useState ("") ;
    const [Number , setNumber] = useState ("") ;

    const onSubmit = () => {
     AddNewContact(name, Number) ;
     onClose();
    }
  return (
    <>
    <div className="addContactForm">
        <form onSubmit={handleFormSubmit}>
            <span><label htmlFor="name"> Enter Name :</label> <br />
            <input type="text" id='name' onChange={(e) => setName(e.target.value)} /></span>
            <span><label htmlFor="mob">Enter Mobile Number:</label> <br />
            <input type="tel" id='mob' onChange={(e) => setNumber(e.target.value)} /></span>
               <div className="btnContainer">
             <button type='submit' onClick={onSubmit}>
               Add Contact
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

export default ContactModal