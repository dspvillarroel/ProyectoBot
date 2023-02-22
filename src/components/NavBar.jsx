import { Link } from "react-router-dom";


const NavBar = () => {
    return(
        <header class="header">
            
            
        <nav>
            <ul>
            <div className='cabecera1'>
            <li><a href='/'>Prioriza</a></li>
            </div>
            <div className='cabecera2'>
            <li><a href='/elige'>Elige</a></li>
            </div>
            <div className='cabecera3'>
            <li><a href='/propone'>Propone</a></li>
            </div>
            <div className='cabecera4'>
            <li><a href='/conocenos'>Conocenos</a></li>
            </div>
            </ul>
        </nav>
       
        
        </header>
    )
}

export default NavBar;