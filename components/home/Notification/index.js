import AppLink from '../../../components/shared/AppLink'
import React, { useState } from 'react';

import css from './style.module.scss'

export default function Notification(props) {

  return (
    <div className={css.notification}>
        <span onClick={props.closeModal} > &#x2573; </span>
        <h3> Mensagem enviada com sucesso!</h3>
    </div>
  )
}
