import { Card } from "../../components/Card";
import { useEffect, useState } from "react";

import "./home.css"

interface Sample{
    temp: string;
    od: string;
    ph: string;
    transparency: string;
    conductivity: string;
    created_date: string;
    id: number;
}

interface Samples{
    temp: Sample;
    od: Sample;
    ph: Sample;
    transparency: Sample;
    conductivity: Sample;
}

export function Home() {
    const [samplesMax, setSamplesMax] = useState<Samples>();
    const [samplesMin, setSamplesMin] = useState<Samples>();
    const [sampleCurrent, setSampleCurrent] = useState<Sample>();

    useEffect(() => {
        const interval = setInterval(() => {
            fetch(' http://localhost:5000/samples/recent',{
                method:'get',
                headers:{
                  'Accept':'application/json',
                  'Content-type':'application/json'
                }
              })
              .then((response)=>response.json())
              .then(async (res) =>{
                console.log(res[0])
                setSampleCurrent(res[0])
              })

            fetch(' http://localhost:5000/samples',{
                method:'get',
                headers:{
                  'Accept':'application/json',
                  'Content-type':'application/json'
                }
              })
              .then((response)=>response.json())
              .then(async (res) =>{
                const MaxSample: Sample = {
                    temp: '-100000000000000000000',
                    od: '-100000000000000000000',
                    ph: '-100000000000000000000',
                    transparency: '-100000000000000000000',
                    conductivity: '-100000000000000000000',
                    created_date: '-100000000000000000000',
                    id:0
                }
                const MaxSamples: Samples = {
                    temp: MaxSample,
                    od: MaxSample,
                    ph: MaxSample,
                    transparency: MaxSample,
                    conductivity: MaxSample,
                }
                const MinSample: Sample = {
                    temp: '100000000000000000000',
                    od: '100000000000000000000',
                    ph: '100000000000000000000',
                    transparency: '100000000000000000000',
                    conductivity: '100000000000000000000',
                    created_date: '100000000000000000000',
                    id:0
                }
                const MinSamples: Samples= {
                    temp: MinSample,
                    od: MinSample,
                    ph: MinSample,
                    transparency: MinSample,
                    conductivity: MinSample,
                }
                await res.forEach((element: Sample)=>{
                    if(Number(MaxSamples.temp.temp) < Number(element.temp)) MaxSamples.temp=element;
                    if(Number(MaxSamples.od.od) < Number(element.od)) MaxSamples.od=element;
                    if(Number(MaxSamples.ph.ph) < Number(element.ph)) MaxSamples.ph=element;
                    if(Number(MaxSamples.transparency.transparency) < Number(element.transparency)) MaxSamples.transparency=element;
                    if(Number(MaxSamples.conductivity.conductivity) < Number(element.conductivity)) MaxSamples.conductivity=element;
                }, )

                await res.forEach((element: Sample)=>{
                    if(Number(MinSamples.temp.temp) > Number(element.temp)) MinSamples.temp=element;
                    if(Number(MinSamples.od.od) > Number(element.od)) MinSamples.od=element;
                    if(Number(MinSamples.ph.ph) > Number(element.ph)) MinSamples.ph=element;
                    if(Number(MinSamples.transparency.transparency) > Number(element.transparency)) MinSamples.transparency=element;
                    if(Number(MinSamples.conductivity.conductivity) > Number(element.conductivity)) MinSamples.conductivity=element;
                }, )
                setSamplesMax(MaxSamples)
                setSamplesMin(MinSamples)
              })
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="homePage">

                <div className="sectionCards">
                
                    <Card titulo="Temperatura" 
                        maximo={samplesMax?.temp.temp} 
                        maximoData={samplesMax?.temp.created_date} 
                        minimo={samplesMin?.temp.temp} 
                        minimoData={samplesMin?.temp.created_date}
                        current={sampleCurrent?.temp}
                        currentData={sampleCurrent?.created_date}
                    />
                    <Card titulo="pH" 
                        maximo={samplesMax?.ph.ph} 
                        maximoData={samplesMax?.ph.created_date} 
                        minimo={samplesMin?.ph.ph} 
                        minimoData={samplesMin?.ph.created_date}
                        current={sampleCurrent?.ph}
                        currentData={sampleCurrent?.created_date}
                    />
                    <Card titulo="OD" 
                        maximo={samplesMax?.od.od} 
                        maximoData={samplesMax?.od.created_date} 
                        minimo={samplesMin?.od.od} 
                        minimoData={samplesMin?.od.created_date}
                        current={sampleCurrent?.od}
                        currentData={sampleCurrent?.created_date}
                    />
                    <Card titulo="Condutividade" 
                        maximo={samplesMax?.conductivity.conductivity} 
                        maximoData={samplesMax?.conductivity.created_date} 
                        minimo={samplesMin?.conductivity.conductivity} 
                        minimoData={samplesMin?.conductivity.created_date}
                        current={sampleCurrent?.conductivity}
                        currentData={sampleCurrent?.created_date}
                    />
                    <Card titulo="Transparência" 
                        maximo={samplesMax?.transparency.transparency} 
                        maximoData={samplesMax?.transparency.created_date} 
                        minimo={samplesMin?.transparency.transparency} 
                        minimoData={samplesMin?.transparency.created_date}
                        current={sampleCurrent?.transparency}
                        currentData={sampleCurrent?.created_date}
                    />
                    <Card titulo="Tempo" />
                    
                </div>

            </div>
        </>
    )

}