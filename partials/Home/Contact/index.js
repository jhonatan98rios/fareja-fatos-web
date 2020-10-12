import React, { useState } from 'react';
import axios from 'axios'

import Notification from '../../../components/home/Notification'

import css from './style.module.scss'

export default function Contact({content}) {

  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [message, setMessage] = useState('');
  const [isOpened, setIsOpen] = useState(false)

  function sendData(){

    if(name.length < 3){ 
      alert("Nome inválido")
      return
    }else if(mail.length < 3){
      alert("Email inválido")
      return
    }else if(message.length < 3){
      alert("Mensagem inválido")
      return
    }

    axios.get('https://fareja-fatos.000webhostapp.com/mail.php', { 
      params:{
        name: name,
        mail: mail,
        message: message
      }
    })
    .then(res => {
      console.log(res);
      console.log(res.data);

      if(res.status == 200) {
        setIsOpen(true)
      }
    })
  }

  function closeModal(){
    setIsOpen(false)
  }

  return (
    <div className={css.contact} id={content.id}>
      <h2>{ content.title }</h2> 
      <form>
        <input type="text" placeholder="Nome" value={name} onChange={ (event)=> setName( event.target.value ) } />
        <input type="text" placeholder="Email" value={mail} onChange={ (event)=> setMail( event.target.value ) } />
        <textarea placeholder="Insira aqui sua mensagem" value={message} onChange={ (event)=> setMessage( event.target.value ) }></textarea>
        <input type="button" value="Enviar" onClick={ ()=> sendData() } />
        <small> * Nenhum dado será armazenado </small>
      </form>
      
      { isOpened && <Notification closeModal={closeModal}  /> }
      
    </div>
  )
}
