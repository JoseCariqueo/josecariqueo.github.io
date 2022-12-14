/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {ImUser} from 'react-icons/im'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {MdOutlineContactMail} from 'react-icons/md'
import {MdWorkOutline} from 'react-icons/md'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState ('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav ('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href='#about' onClick={() => setActiveNav ('#about')} className={activeNav === '#about' ? 'active' : ''}><ImUser/></a>
      <a href='#experience'onClick={() => setActiveNav ('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
      <a href='#services'onClick={() => setActiveNav ('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
      <a href='#portfolio'onClick={() => setActiveNav ('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><MdWorkOutline/></a>
      <a href='#contact'onClick={() => setActiveNav ('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdOutlineContactMail/></a>
      
    </nav>
  )
}

export default Nav