import React from "react";
import { useState } from "react";

const Semaforo = () => {
    const [colorActivo, setColorActivo] = useState("")
    return (
    <>
    <div className="cuerpoSemaforo">
        <div className={`luz luzRoja ${colorActivo === "rojo" ? "luzActiva" : ""}`} onClick={() => setColorActivo("rojo")}></div>
        <div className={`luz luzAmarilla ${colorActivo === "amarillo" ? "luzActiva" : ""}`} onClick={() => setColorActivo("amarillo")}></div>
        <div className={`luz luzVerde ${colorActivo === "verde" ? "luzActiva" : ""}`} onClick={() => setColorActivo("verde")}></div>
    </div>
    </>
    )
}

export default Semaforo