import React, {useState} from 'react'
import ContactModal from './ContactModal';

const AddContact = ({AddNewContact }) => {

    const [isModalOpen , setIsModalOpen] = useState(false);
    const handlebuttonClick = () => {
      setIsModalOpen(true);
    };

  return (
    <>
      <div className='add-btn'>
        <button onClick={handlebuttonClick}>Add Contact</button>
        {isModalOpen && <ContactModal onClose={() => setIsModalOpen(false)} AddNewContact = {AddNewContact} />}
      </div>
    </>
  )
}

export default AddContact