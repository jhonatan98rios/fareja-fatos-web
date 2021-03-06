import React, { useState } from 'react';
import axios from 'axios'
import emailjs from 'emailjs-com';
import Notification from '../../../components/home/Notification'

import css from './style.module.scss'

export default function Contact({content}) {

  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [message, setMessage] = useState('');
  const [isOpened, setIsOpen] = useState(false)

  function closeModal(){
    setIsOpen(false)
  }

  function sendEmail(e) {
    e.preventDefault();

    if(name.length <= 0 || mail.length <= 0 || message.length <= 0){
      alert('Preencha o formulário antes de enviar o email')
      return false
    }

    axios.post('https://api.emailjs.com/api/v1.0/email/send', {
      /* API config */
      service_id: 'service_0bvhix9',
      template_id: 'template_s2yx4ut',
      user_id: 'user_ZH0PszSYl2w1eUa4CWDMz',

      /* Email body */
      template_params: {
        'username': name,
        'mail': mail,
        'message': message
      }
    })
    .then(function (response) {
      setIsOpen(true)
      setName('')
      setMail('')
      setMessage('')

    })
    .catch(function (error) {
      console.log(error);
      
    });
  }

  return (
    <div className={css.contact} id={content.id}>
      <h2>{ content.title }</h2> 

      <form onSubmit={sendEmail}>
        <input 
          type="text" 
          placeholder="Nome" 
          value={name} 
          onChange={ (event)=> setName( event.target.value ) } 
        />

        <input 
          type="email" 
          placeholder="Email" 
          value={mail} 
          onChange={ (event)=> setMail( event.target.value ) } 
        />

        <textarea 
          placeholder="Insira aqui sua mensagem" 
          value={message} 
          onChange={ (event)=> setMessage( event.target.value ) } 
        />

        <input 
          type="submit" 
          value="Enviar" 
        />

        <small> * Nenhum dado será armazenado </small>
      </form>
      
      { isOpened && <Notification closeModal={closeModal}  /> }
      
    </div>
  )
}
