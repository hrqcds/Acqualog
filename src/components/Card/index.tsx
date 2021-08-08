import React from "react"
import { FaTemperatureHigh, FaTemperatureLow, FaVial, FaClock } from "react-icons/fa"

import "./card.css"

type CardProps = {
    titulo: string,
}

export function Card({ titulo }: CardProps) {


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
                    <div className="datas">
                        <h4>01/03/2021</h4>
                        <h4>13:05:00</h4>
                    </div>
                    <div className="datas">
                    <h4>01/03/2021</h4>
                    <h4>13:05:00</h4>
                    </div>
                    <div className="datas">
                        <h4>01/03/2021</h4>
                        <h4>13:05:00</h4>
                    </div>
                </div>
            </div>

        </>
    )
}