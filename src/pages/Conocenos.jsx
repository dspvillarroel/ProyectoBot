import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

const Conocenos = () => {
    const navigate = useNavigate();
    return (
        <div>
            <NavBar />
            <div className="conocenos">
                <h1>ParticipaBOt</h1>
                <center><p>PRIORIZANDO POLÍTICAS PÚBLICAS</p>
                <h2>Acerca de Participa BOt</h2></center>
                <p>
                    Si tuvieras que priorizar entre las propuestas ciudadanas existentes: ¿qué harías? Te invitamos a que realices tu elección a partir de comparaciones de pares de propuestas en Prioriza. Al final se generará un ranking de propuestas a partir de esas elecciones.

                    No te preocupes si en algún momento se repite una propuesta varias veces, ya que es un proceso aleatorio. Dato geek, esto sucede porque al momento existen 60 propuestas y la posibilidad de 1770 comparaciones entre ellas.

                    Si no encuentras una propuesta que te parece importante, puedes ir a la sección Elige donde puedes elegir entre 219 propuestas o ir a Propone donde recibimos nuevas propuestas. Esperamos leerte.
                </p> <br />
                <center><h2>Acerca de nosotros </h2></center>
                <p>
                    El Laboratorio de Tecnologías Sociales es una organización de la sociedad civil que promueve el desarrollo de soluciones que combinen las ciencias sociales con la informática. Su sede está en Cochabamba, Bolivia. Pueden conocer al equipo de trabajo del Lab y este proyecto en labtecnosocial.org/sobre-nosotros.

                    La plataforma se inspiró en el trabajo de Chilecracia, pero añadiendo (1) funciones adicionales de participación como Propone y Elige, (2) resultados personales en una tabla de categorías y una red de partidas y (3) propuestas ciudadanas bolivianas a partir de un mapeo de actores de la sociedad civil.</p>
            </div>
        </div>
    )
}

export default Conocenos;