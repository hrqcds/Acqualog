import React from "react"
import { FaTemperatureHigh, FaTemperatureLow, FaVial, FaClock } from "react-icons/fa"

import "./card.css"

type CardProps = {
    titulo?: string,
    minimo?: string,
    maximo?: string,
    current?: string,
    minimoData?: string,
    maximoData?: string,
    currentData?: string
}

export function Card({ 
    titulo,
    minimo=' ',
    maximo=' ',
    current=' ',
    minimoData=' ',
    maximoData=' ',
    currentData=' '
}: CardProps) {


    return (
        <>
            <div className="card">
                <h1>
                    {/* ICONES */}
                    {titulo === "Temperatura" && (
                        <FaTemperatureLow/>
                    )}  

                    {titulo === "pH" && (
                        <FaVial/>
                    )}    

                    {titulo === "OD" && (
                        <FaTemperatureHigh/>
                    )}    

                    {titulo === "Condutividade" && (
                        <FaTemperatureHigh/>
                    )}    

                    {titulo === "Transparência" && (
                        <FaTemperatureHigh/>
                    )}    

                    {titulo === "Tempo" && (
                        <FaClock/>
                    )}          



                    {/* ICONES */}
                    {titulo}
                </h1>

                <div className="cardItens">
                    <h3 className="minimo">Minimo</h3>
                    <h3>Atual</h3>
                    <h3 className="maximo">Maximo</h3>
                </div>
                <div className="cardItens">
                    <h3 className="minimo">{minimo}</h3>
                    <h3>{current}</h3>
                    <h3 className="maximo">{maximo}</h3>
                </div>
                <div className="cardItens">
                    <div className="datas">
                        <h4>{minimoData.substring(0,10)}</h4>
                    </div>
                    <div className="datas">
                        <h4>{currentData.substring(0,10)}</h4>
                    </div>
                    <div className="datas">
                        <h4>{maximoData.substring(0,10)}</h4>
                    </div>
                </div>
                <div className="cardItens">
                    <div className="datas">
                        <h4>{minimoData.substring(11,19)}</h4>
                    </div>
                    <div className="datas">
                        <h4>{currentData.substring(11,19)}</h4>
                    </div>
                    <div className="datas">
                        <h4>{maximoData.substring(11,19)}</h4>
                    </div>
                </div>
            </div>

        </>
    )
}