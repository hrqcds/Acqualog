import { Card } from "../../components/Card";
import { Header } from "../../components/Header";

export function Home(){
    return(
        <>
            <Header/>
            <div className="homePage">
                <div className="section-card">
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
                <div className="section-card">
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
                

            </div>
        </>
    )

}