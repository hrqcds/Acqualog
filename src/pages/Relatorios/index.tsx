import React from "react"
import { Filtros } from "../../components/Filtros"
import { Table } from "../../components/Table"

import "./relatorios.css"

export function Relatorios() {
    return (
        <>
            {/* Filtros */}

            <Filtros/>

            {/* Gráfico */}
            <div className="section relatorioContainer">
                <Table/>
            </div>

            {/* Tabela */}
            <div className="section relatorioContainer">
                <h1>teste</h1>
            </div>
        </>
    )
}