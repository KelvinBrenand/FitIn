import React, { useState } from "react";
import { Link, useNavigate} from "react-router-dom"
import running_girl from "../images/running_with_the_wind.png"
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import useAuth from "../../../hooks/useAuth";
import Axios from "axios";

export default function Bottom(){
  
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = () => {
    if (!email | !senha) {
      alert("Preencha todos os campos.");
      return;
    }

    Axios.post("http://localhost:3001/checkuser",{
      email: email,
      password: senha,
    }).then((response)=>{
        if (response.data[0].userFound) {
          signin(email, senha);
          navigate("/home");
        } else {
          alert("Erro ao logar. Isso pode ter ocorrido devido ao usuário não constar na base de dados ou email/senha inválidos.");
          return;
        }
      });
  };

  return(
    <div className="bottom">
      <div className="sign-in-area">
        <div className="email-password-text">Email or phone</div>
        <Input
          type="email"
          placeholder=""
          value={email}
          onChange={(e) => [setEmail(e.target.value)]}
        />
        <div className="email-password-text">Password</div>
        <div className="password-box">
          <Input
            type="password"
            placeholder=""
            value={senha}
            onChange={(e) => [setSenha(e.target.value)]}
          />
        </div>
        
        <div className="forgot-password-text">Forgot password?</div>
        <div className="SignInDiv">
          <Link className="home--link" to="/home">
              <Button Text="Sign in" onClick={handleLogin} />
          </Link>
        </div>
      </div>
  
      <img className="main-image" src={running_girl} alt=""/>
    </div>
  )
}