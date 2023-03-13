import React from 'react'
import Search from './Search'
import {logo} from '../assets'

const Header = () => {
  return (
   <>
   <div className='logo-img'>
    <img src={logo} alt="" />
   </div>
   <div className='add-btn'>
    <button>Add Contact</button>
   </div>
   <div className='search-btn'>
   <Search />

   </div>
   </>
  )
}

export default Header