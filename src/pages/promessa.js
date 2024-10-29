import { Container } from "react-bootstrap";
import Footer from "./components/footer";
import Menu from "./components/navbar";
import { useEffect, useState } from "react";

export default function Promessa() {
    const [divida, setDivida] = useState("")
    useEffect(() => {
        setTimeout(() => {
            document.title = "Minha Promessa"
            setDivida(saoLonguinho("da vida"))
        }, 4000);
    })
    return <>
        <Menu />
        <Container>
            Promessas {(divida==="" ? <img src="loadiing.gif"/>: divida)}
        </Container>
        <Footer />
    </>
}
function saoLonguinho(texto){
  setTimeout(()=>{
    return (texto)
  },2000)

}