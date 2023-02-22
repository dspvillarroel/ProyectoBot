import React, {useState} from 'react';
import FillComboBox from '../components/comboBox';
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
const Propone =() => {
    const [categoriaState, setCategoriaState] = useState('');
    
    return (
      <div><NavBar/>
        <div className='propone'>
            
            <h1>ParticipaBOt</h1>
            
            <center><p>PRIORIZANDO POLÍTICAS PÚBLICAS</p>
            <p>Si no ves alguna propuesta que te interese en Elige, puedes proponer la tuya en esta sección. En una próxima etapa, las propuestas de Propone pasarán a Elige.</p>
            </center>
            <div>


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
            <input type="input" placeholder='Mi propuesta es' />
            <button type='submit'>Enviar propuesta</button> 
         
        </div>
            </div>
        </div>
        </div>
    )
}

export default Propone;