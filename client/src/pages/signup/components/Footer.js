import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Axios from "axios";

export default function BottomSection(){

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const navigate = useNavigate();

    const handleSignup = () => {
        if (!email | !senha) {
        alert("Preencha todos os campos.");
        return;
        }

        Axios.post("http://localhost:3001/register",{
            email: email,
            password: senha,
        }).then((response)=>{
            console.log(response);
        });

        alert("Usuário cadatrado com sucesso!");
        navigate("/");
    };


    return(
        <section className="center">
            <div className="caixa">
                <div className="email-password">E-mail or Phone number</div>
                {/* <input className="email-password-box" type="text"/> */}
                <Input
                    type="email"
                    placeholder=""
                    value={email}
                    onChange={(e) => [setEmail(e.target.value)]}
                />
                <div className="email-password">
                    Password
                </div>
                <Input
                    type="password"
                    placeholder=""
                    value={senha}
                    onChange={(e) => [setSenha(e.target.value)]}
                />
                <div className="tos">By clicking Agree & Join, you agree to the FitIn 
                    <a className="legal-links" href="/#">User Agreement</a>, 
                    <a className="legal-links" href="/#">Privacy Policy</a> and 
                    <a className="legal-links" href="/#">Cookie Policy</a>
                </div>
                <div className="joinDiv">
                    <Link className="home--link" to="/home">
                        <Button Text="Agree & Join" onClick={handleSignup} />
                    </Link>
                </div>
            </div>
        </section>
    )
}