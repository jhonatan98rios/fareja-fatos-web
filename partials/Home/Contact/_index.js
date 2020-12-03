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
  
  /* function sendData(){

    if(name.length < 3){ 
      alert("Nome inválido")
      return
    }else if(mail.length < 3){
      alert("Email inválido")
      return
    }else if(message.length < 3){
      alert("Mensagem inválida")
      return
    }

    const templateParams = {
      mail,
      notes: message
    };
    
    emailjs.send('', '', templateParams, '')
      .then(function(response) {
        
        
      }, function(error) {  });
  } */

  function closeModal(){
    setIsOpen(false)
  }

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_0bvhix9', 'template_s2yx4ut', e.target, 'user_ZH0PszSYl2w1eUa4CWDMz')
      .then((result) => {
        console.log('SUCCESS!', result.status, result.text)
      }, (error) => {
        console.log('FAILED...', error)
      });
  }

  return (
    <div className={css.contact} id={content.id}>
      <h2>{ content.title }</h2> 

      <form onSubmit={sendEmail}>
        <input 
          type="text" 
          placeholder="Nome" 
          name="user_name"
        />

        <input 
          type="email" 
          placeholder="Email" 
          name="user_email"
        />

        <textarea 
          placeholder="Insira aqui sua mensagem" 
          name="message"
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
