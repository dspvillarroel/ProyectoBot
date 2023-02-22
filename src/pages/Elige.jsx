import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import FillComboBox from '../components/comboBox';
import NavBar from '../components/NavBar';
import { getItemsByConditionType } from "../functions";


const Elige = () => {
    const [categoriaState, setCategoriaState] = useState('');

    const existType = async (typeQuestion) => {
        const result = await getItemsByConditionType(typeQuestion);
        var voto = []
        result.docs && result.docs.map(e => voto.push(e.data().eleccion))
        console.log(voto)
        document.getElementById('question').innerHTML = voto
      };


    return (
        <div>
            <NavBar/>
        <div className='elije'>
            <h1>ParticipaBOt</h1>
            <center><p>PRIORIZANDO POLÍTICAS PÚBLICAS</p></center>
            <center><p>Si no ves alguna propuesta que te interese en las comparaciones que ParticipaBOt muestra en Prioriza, puedes elegir alguna de las propuestas en esta lista filtrandola por categorias. Las propuestas con más votos pasarán en una próxima etapa a Prioriza.</p></center>
            <div>
        <center><h4>Seleccione la Categoría</h4></center>

        <select className='custom-select' 
          value={categoriaState}
          onChange={(e)=>{
            const selectedCategoria=e.target.value;
            setCategoriaState(selectedCategoria);
        }}>
        <FillComboBox/>
        </select>
        <div>
          {categoriaState}
        </div>

            <button onClick={() => existType(categoriaState)} className="pb-8">
                SUBMIT
            </button>
        </div>
        <p id="question"></p>
        </div>
        </div>
    )
}

export default Elige;