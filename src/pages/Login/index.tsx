import "./login.css"
import logo from "../../assets/images/logo.jpg"
import google_icon from "../../assets/images/google-icon.svg" 

export function Login(){

    return(
        <div className="pageLogin">
            
            <div className="imgDiv">
                <img className="logoImg" src={logo} alt="logo do projeto" />
                <span>
                    <h1>Project Water</h1>
                <p>Projeto que visa gerir relatórios para controle da limpeza da água</p></span>
            </div>
            <form id="">
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
                       
            <p>Esqueceu sua senha?  <a href="#"> clique aqui</a></p>
        </div>
    )
}