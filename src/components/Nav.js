import React from 'react'
import { NavLink } from 'react-router-dom'
export const Nav = () => {
  return (
    <div className='Nav'>
        <div className="navLink">
            <ul>
                <li><b><NavLink to='/' className={(e)=>{return e.isActive?'NavLinkActive':''}}>HOME</NavLink></b></li>
                <li><b><NavLink to='/science' className={(e)=>{return e.isActive?'NavLinkActive':''}}>SCIENCE</NavLink></b></li>
                <li><b><NavLink to='/sports' className={(e)=>{return e.isActive?'NavLinkActive':''}}>SPORTS</NavLink></b></li>
                <li><b><NavLink to='/business' className={(e)=>{return e.isActive?'NavLinkActive':''}}>BUSINESS</NavLink></b></li>
                <li><b><NavLink to='/about' className={(e)=>{return e.isActive?'NavLinkActive':''}}>ABOUT</NavLink></b></li>
                <li><b><NavLink to='/contact' className={(e)=>{return e.isActive?'NavLinkActive':''}}>CONTACT</NavLink></b></li>
            </ul>
        </div>
    </div>
  )
}
