import React, {useState} from "react"
import { createItem, getItemsByCondition, updateItem, getItems } from "../functions";



const textos = [
    "Aplicar estandares de modelos educativosinternacionales", 
    "Fortalecer la prevención ante hechos de violencia y delitos", 
    "Abolir el servicio militar obligatorio",
    "Ampliar las rutas de las ciclovias y garantizar la seguridad al ciclista",
    "Abrogar el paquete de normas que permiten las quemas incontroladas",
    "Promover iniciativas de formación politica y liderazgo de mujeres", 
    "Fortalecer el sistema prevención de enfermedades", 
    "Reestructurar el sistema de salud y mejorar sus protocolos organizativos" ];

const tipos = [ 
    "Educación",
    "Género",
    "Democracia", 
    "Ciudades",
    "Medio Ambiente", 
    "Género", 
    "Salud",
    "Salud"]

function texto () {
	const len_textos = textos.length
	const index = Math.floor(Math.random() * len_textos)
    let index_dos = Math.floor(Math.random() * len_textos)
    while (index === index_dos){
        index_dos = Math.floor(Math.random () * len_textos)
    }
    document.getElementById('container_uno').innerHTML = textos[index]
    document.getElementById('container_dos').innerHTML = textos[index_dos]
    document.getElementById('tipo_pregunta').innerHTML = tipos[index]
    document.getElementById('tipo_pregunta_dos').innerHTML = tipos[index_dos]
}


const Contador = () => {
    const [contador, setContador] = useState(0);

    const existVoto = async (nVoto, typeVoto) => {
        const result = await getItemsByCondition(nVoto)
        if (result.empty){
            createItem({eleccion: nVoto, nVoto: 1, tipo: typeVoto});
        } else {
            var idVoto = "";
            var nV = "";
            result.docs && result.docs.map(e => idVoto = e.id)
            result.docs && result.docs.map(e => nV = e.data().nVoto)
            updateItem(idVoto, {nVoto: nV += 1}, typeVoto)
        }
    }

    function textCount () {
        var nameVoto = document.getElementById("container_uno").innerHTML;      
        var typeVoto = document.getElementById("tipo_pregunta").innerHTML; 
        existVoto(nameVoto, typeVoto)
        texto();
        setContador (contador +1);
    }

    function textCountB () {
        var nameVoto = document.getElementById("container_dos").innerHTML; 
        var typeVoto = document.getElementById("tipo_pregunta_dos").innerHTML;  
        existVoto(nameVoto, typeVoto)
        
        texto();
        setContador (contador +1);
    }

    function NoneOption () {
        texto();
        setContador (contador +1);
    }

    
    return (
        <div>

            <h4>A continuación se presentaran sugerencias, que pueden ser de tu interes o no</h4>

            <button onClick={() => textCount()} className="pb-10">
                <div>
                <h4 id ="container_uno"></h4>
                <p id="tipo_pregunta"></p>
                </div>
            </button>


            <button onClick={() => textCountB()} className="sug">
                <div>
                <h4 id ="container_dos"></h4> 
                <p id="tipo_pregunta_dos"></p> 
                </div>
            </button>
            
            <button onClick={() => NoneOption()} className="NO"> No me interesa </button>
        
            <p>¿ Te interesa esta sugerencia ? {contador} </p>
       
        </div>
    )
    
}

export default Contador;