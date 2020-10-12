import AppLink from '../../../components/shared/AppLink'
import React, { useState } from 'react';

import css from './style.module.scss'

export default function Navbar(props) {

  const [isOpened, setMenu] = useState(false)

  function openMenuMobile(){
    console.log('Ok')
    if(!isOpened){
      setMenu(true)
    }else{
      setMenu(false)
    }
  }

  return (
    <div className={css.navbar}>
      <h2 onClick={ ()=> openMenuMobile() }> {props.content.logo} </h2>
      <ul className={` ${css.menu} ${ isOpened ? css.openMenu : ''}`}>
        {
          props.content.links.map((link, index) => {
            return (
              // Passing openMenuMobile as prop to AppLink
              <AppLink content={link} action={openMenuMobile} key={index} />
            )
          })
        }
      </ul>
    </div>
  )
}
