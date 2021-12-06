import { useState, useEffect, useRef } from 'react';

// STYLE
import * as C from './style';

// Validate
import { PropsValidate } from '../../types/validate';

function ContactForm() {

  // STATEs
  const [ name, setName ] = useState<string>('');
  const [ validateName, setValidateName ] = useState<boolean>();
  const [ email, setEmail ] = useState<string>('');
  const [ validateEmail, setValidateEmail ] = useState<boolean>();
  const [ msg, setMsg ] = useState<string>('');
  const [ validateMsg, setValidateMsg ] = useState<boolean>();

  // REFs
  const buttonRef = useRef<HTMLButtonElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const msgRef = useRef<HTMLTextAreaElement>(null);

  useEffect(()=>{
    if(validateName && validateEmail && validateMsg) {
      buttonRef.current?.classList.add('success');
    } else {
      buttonRef.current?.classList.remove('success');
    }
  }, [validateName, validateEmail, validateMsg])

  // Verifica campo de nome!
  function blurName() {
    if(name != "") {
      getError({status: true, type: "name", message: ""});
    } else {
      getError({status: false, type: "name", message: "Preencha o campo de nome!"});
    }
  }
  
  // Verifica campo de e-mail
  function blurEmail() {
    if(email != "") {
      if(email.indexOf('@') > -1) {
        if(email.split('@')[1] === "gmail.com" || email.split('@')[1] === "hotmail.com") {
          getError({status: true, type: "email", message: ""});
        } else {
          getError({status: false, type: "email", message: "Campo de e-mail invalido!"});
        }
      } else {
        getError({status: false, type: "email", message: "Campo de e-mail invalido!"});
      }
    } else {
      getError({status: false, type: "email", message: "Preencha o campo de email!"});
    }
  }

  // Verifica campo de Mensagem
  function blurMsg() {
    if(msg != "") {
      getError({status: true, type: "msg", message: ""});
    } else {
      getError({status: false, type: "msg", message: "Preencha o campo de mensagem!"});
    }
  }

  // Exibi de forma visual quando um campo está errado
  function getError(data: PropsValidate) {
    switch(data.type) {
      case 'name':
        if(data.status) {
          nameRef.current?.classList.remove('warning');
          nameRef.current?.classList.add('success');
          setValidateName(true);
        } else {
          nameRef.current?.classList.remove('success');
          nameRef.current?.classList.add('warning');
          setValidateName(false);
        }
      break;
      case 'email':
        if(data.status) {
          emailRef.current?.classList.remove('warning');
          emailRef.current?.classList.add('success');
          setValidateEmail(true);
        } else {
          emailRef.current?.classList.remove('success');
          emailRef.current?.classList.add('warning');
          setValidateEmail(false);
        }
      break;
      case 'msg':
        if(data.status) {
          msgRef.current?.classList.remove('warning');
          msgRef.current?.classList.add('success');
          setValidateMsg(true);
        } else {
          msgRef.current?.classList.remove('success');
          msgRef.current?.classList.add('warning');
          setValidateMsg(false);
        }
      break;
    }
  }

  function sendEmail() {
    if(validateName && validateEmail && validateMsg) {
      alert("ok");
    }
  }

  return (
    <C.Container>
      <input 
        type="text" 
        value={name} 
        onChange={(e)=>setName(e.target.value)}
        onBlur={blurName}
        placeholder="Nome..." 
        ref={nameRef}
      />
      <input 
        type="email" 
        value={email} 
        onChange={(e)=>setEmail(e.target.value)}
        onBlur={blurEmail}
        placeholder="E-mail..." 
        ref={emailRef}
      />
      <textarea 
        placeholder="Mensagem..." 
        value={msg} 
        onChange={(e)=>setMsg(e.target.value)}
        onBlur={blurMsg}
        ref={msgRef}
      ></textarea>
      <button onClick={sendEmail} ref={buttonRef}>Enviar</button>
    </C.Container>
  )
}

export default ContactForm;