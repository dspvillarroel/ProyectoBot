import React, {useState} from 'react';
import FillComboBox from '../components/comboBox';
import NavBar from "../components/NavBar";
import { createItem } from "../functions";
const Propone =() => {
    const [categoriaState, setCategoriaState] = useState('');
    
    const register = async (proporsal, typeProporsal) => {
      createItem({tipo: typeProporsal, propuesta: proporsal});
    }

    function registerProposal(){
      var selectElement = document.getElementById("custom-select");
      var selectedOption = selectElement.value;

      var inputElement = document.getElementById("proporsal");
      var inputValue = inputElement.value;
      register(inputValue, selectedOption);
    }



    return (
      <div><NavBar/>
        <div className='propone'>
            
            <h1>ParticipaBOt</h1>
            
            <center><p>PRIORIZANDO POLÍTICAS PÚBLICAS</p>
            <p>Si no ves alguna propuesta que te interese en Elige, puedes proponer la tuya en esta sección. En una próxima etapa, las propuestas de Propone pasarán a Elige.</p>
            </center>
            <div>

        <select className='custom-select'
          id="custom-select" 
          value={categoriaState}
          onChange={(e)=>{
            const selectedCategoria=e.target.value;
            setCategoriaState(selectedCategoria);
        }}>
        <FillComboBox/>
        </select>

        <div>
            {categoriaState}
            <input type="text" placeholder='Mi propuesta es' 
            id="proporsal"></input>
            <button onClick={() => registerProposal()}>Enviar propuesta</button> 
        </div>
            </div>
            
        </div>
        </div>
    )
}

export default Propone;