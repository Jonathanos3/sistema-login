import { LayoutComponents } from "../../components/LayoytComponents"
import { FiUser, FiLock, FiMail } from "react-icons/fi";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Register = () =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return(
        <LayoutComponents>
        <form className="login-form">
      <span className="form-title"> Criar Conta</span>

      <div className="wrap-input">
      <FiUser color="#9A9595" size={18} />
      <input
        type="name"
        placeholder="Digite seu Nome"
      />
    </div>

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
        <span className="txt1">Já tem uma conta?</span>
        <Link className="txt-2" to="/login">
          Acessar!
        </Link>
      </div>
    </form>
        </LayoutComponents> 
    )
}