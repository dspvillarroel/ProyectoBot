import React from "react";
import { useNavigate } from "react-router-dom";
import Contador from "../components/contador";
import NavBar from "../components/NavBar";

const Home = () => {
    return(
        <div>
            <NavBar/>
            <center>
            <div className='home' >
                    <h1>ParticipaBOt</h1>
                    <p>PRIORIZANDO POLÍTICAS PÚBLICAS</p>
                    <h2>¿Qúe Prefieres?</h2>
                <p class="caja1"></p>
                <p class="caja2"></p>
                
            <div>
                <div className="contenido-l">
                    <center>
               <h2>
               ¿Por qué participar?
               </h2>
               <p>ParticipaBOt ayuda a construir una agenda común de propuestas ciudadanas a través de la agregación de preferencias individuales. Esta agenda se socializará en la opinión pública y con diferentes niveles de gobierno con el fin de generar deliberación e incidencia pública ciudadana.</p>
                 <h2> 
                 ¿Cómo funciona?
                 </h2>
                <p> ParticipaBOt no es una encuesta. Es un sistema de generación de agendas basadas en preferencias ciudadanas individuales. Las propuestas compiten entre sí mediante "partidas" (comparaciones), donde cada propuesta acumula partidas "ganadas" y "perdidas" según la elección del participante.</p>
                 <h2>
                 Compartir por:
                 </h2>   
                 </center>
                 <p>La participación es libre y anónima.
                 Con el fin de poder brindar resultados más interesantes de las preferencias, sí se pedirán datos generales antes de comenzar a votar.</p>

                </div>
                <div className="contador">
                    <Contador/>
                    </div>
                </div>
            </div>
            </center>
        </div>
    )
}

export default Home;