import {Link} from "react-router-dom"

import logo from "../../assets/images/logo-acqualog.png"
import google_icon from "../../assets/images/google-icon.svg" 

import "./login.css"

export function Login(){
    return(
        <div className="pageLogin">
            
            <div className="imgDiv">
                <img className="logoImg" src={logo} alt="logo do projeto" />
                <span>
                    <h1>Acqualog</h1>
                <p>Projeto que visa gerir relatórios para controle da limpeza da água</p></span>
            </div>
            <form>
                <input type="text" placeholder="E-mail"/>

                <input type="text" placeholder="Password"/>

                <div className="divButton">
                
                    <button className="login" type="submit">Login</button>

                    <button className="socialButton" type="button">
                        <img src={google_icon} alt="Icone do google" />
                        Login social
                    </button>     

                </div>          
            </form>
                       
            <p>Esqueceu sua senha?  <Link to="#"> clique aqui</Link></p>
        </div>
    )
}