import React , {useState} from 'react'
import { edit} from '../assets';
import EditContactModal from './EditContactModal';


const EditContact = ({updatehandler , contact , updateContact}) => {

    const [isOpen , setIsOpen] = useState(false);

    const handlebtnClick = () => {
          setIsOpen(true);
          console.log(contact.id ,  "contact.id");
          updatehandler(contact.id)
          console.log(contact ,  "contact");
    };

  return (
    <div className="btn-row">
          <button onClick={handlebtnClick}>
            <img src={edit} alt="" srcSet="" />
          </button>
          {isOpen && <EditContactModal onClose={() => setIsOpen(false)} contact={contact} updateContact={updateContact}  />}
        </div>
  )
}

export default EditContact