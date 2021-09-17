import React from "react"
import { FaTemperatureHigh, FaTemperatureLow, FaVial, FaClock, FaCalendarDay } from "react-icons/fa"
import { dadosRelatorio } from "../../utils/dadosTesteRelatorios"

import "./table.css"

export function Table() {

    return (
        <div className="tableContainer">
            <table>

                <thead>
                    <th> <FaTemperatureLow /> Temperatura</th>
                    <th> <FaVial /> pH</th>
                    <th> <FaTemperatureHigh /> OD</th>
                    <th> <FaTemperatureHigh /> Condutividade</th>
                    <th> <FaTemperatureHigh /> Trânsparência</th>
                    <th> <FaCalendarDay /> Data</th>
                    <th> <FaClock /> Hora</th>
                </thead>
                <tbody>
                    {dadosRelatorio.map((item) => (
                        <tr>
                            <td>{item.temperatura}ºC</td>
                            <td>{item.ph}</td>
                            <td>{item.od}</td>
                            <td>{item.condutividade}</td>
                            <td>{item.transparencia}</td>
                            <td>{item.data}</td>
                            <td>{item.hora}</td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    )
}