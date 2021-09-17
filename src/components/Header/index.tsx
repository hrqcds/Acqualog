import React from "react"

import { Link } from "react-router-dom"

import logo from "../../assets/images/logo-acqualog.png"

import "./header.css"

export function Header() {
    return (

        <div className="componentHeader">

            <div className="logoDiv">
                <img src={logo} alt="logo" />
                <h1>Acqualog</h1>
            </div>

            <div className="navegacao">

                <nav>
                    <ul>
                        <li>                            
                            <Link to="/">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/relatorios">Relatórios</Link>
                        </li>
                    </ul>
                </nav>

            </div>

        </div>
    )
}