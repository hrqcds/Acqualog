import { FaUserAlt } from "react-icons/fa"
import { Link } from "react-router-dom"

import logo from "../../assets/images/logo-acqualog.png"

import "./header.css"

export function Header(){
    return(
        
        <div className="componentHeader">

            <div className="logoDiv">
                <img src={logo} alt="logo" />
                <h1>Acqualog</h1>
            </div>

            <div className="navegacao">
            
                <nav>
                    <ul>
                        <li>
                            <Link to="#">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="#">Cadastro de Itens</Link>
                        </li>
                        <li>
                            <Link to="#">Relatórios</Link>
                        </li>
                    </ul>
                </nav>

                <button>
                     <FaUserAlt size={30} color="#000"/>
                </button>
                
            </div>
            
        </div>
    )
}