import React from "react"

import "./filtros.css"

export function Filtros() {
    return (

        <div className="filtroContainer">

            <div className="filtros">
                <div className="teste">
                    Temperatura
                    <input type="checkbox" />
                </div>
                <div className="teste">
                    pH
                    <input type="checkbox" />
                </div>
                <div className="teste">
                    OD
                    <input type="checkbox" />
                </div>
                <div className="teste">
                    Condutividade
                    <input type="checkbox" />
                </div>
                <div className="teste">
                    Transparência
                    <input type="checkbox" />
                </div>
                <div className="teste">
                    <input type="datetime-local" />
                </div>

            </div>

            <button>Adicionar .CSV</button>

        </div>
    )
}