import React, { useState } from "react";
import "./styles.css";
import {  FiUser, FiLock } from "react-icons/fi";



function App () {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
        <form className="login-form">
          <span className="form-title"> Bem Vindo</span>
          <div className="wrap-input">
            <FiUser color="#9A9595" size={18} />
            <input type="email" value={email} onChange={(e) => { 
              setEmail(e.target.value)}} placeholder="Digite seu e-mail"/>
          </div>

          <div className="wrap-input">
            <FiLock color="#9A9595" size={18}/>
            <input type="password"  value={password} onChange={(e) => { 
              setPassword(e.target.value)}} placeholder="*********"/>
          </div>

          <div className="login-form-btn">
            <button onClick={() => {
              if(email ===""){
                alert("Preencha o campo e-mail")
              }
             
            }} className="form-btn">Entrar</button>
          </div>

          <div className="text-center">
          <span className="txt1">Não possui conta?</span>
          <a className="txt-2" href="/">Criar conta</a>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
}

export default App;


