import React from 'react'
import {userImg} from '../assets'
import {edit} from '../assets'
import {trash} from '../assets'

const ListItem = () => {
  return (
    <>
     <div className="ListItem">
        <img src= {userImg}  alt="" srcset="" />
        <div className="contact-detail">
          <h3>Alok Singh</h3>
          <p> 9016339469</p>
        </div>
        <div className="btn-row">
          <button>
            <img src={edit} alt="" srcset="" />
            </button>
            <button>
                 <img src={trash} alt="" srcset="" />
            </button>
        </div>
     </div>
     


    
    </>
  )
}

export default ListItem