import { Link } from "react-router-dom";
import React, { useState } from "react";
import { FiLock, FiMail } from "react-icons/fi";
import { LayoutComponents } from "../../components/LayoytComponents";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <LayoutComponents>
    <form className="login-form">
      <span className="form-title"> Bem Vindo</span>
      <div className="wrap-input">
        <FiMail color="#9A9595" size={18} />
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Digite seu e-mail"
        />
      </div>

      <div className="wrap-input">
        <FiLock color="#9A9595" size={18} />
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="*********"
        />
      </div>

      <div className="login-form-btn">
        <button
          onClick={() => {
            if (email === "") {
              alert("Preencha o campo e-mail");
            }
          }}
          className="form-btn"
        >
          Entrar
        </button>
      </div>

      <div className="text-center">
        <span className="txt1">Não possui conta?</span>
        <Link className="txt-2" to="/register">
          Criar conta
        </Link>
      </div>
    </form>
    </LayoutComponents>
  );
};
