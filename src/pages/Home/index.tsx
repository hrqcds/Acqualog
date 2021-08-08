import { Card } from "../../components/Card";

import "./home.css"

export function Home() {
    return (
        <>
            <div className="homePage">

                <div className="sectionCards">
                
                    <Card titulo="Temperatura" />
                    <Card titulo="pH" />
                    <Card titulo="OD" />
                    <Card titulo="Condutividade" />
                    <Card titulo="Transparência" />
                    <Card titulo="Tempo" />
                    
                </div>

            </div>
        </>
    )

}