import './Navbar.css';
import {Link} from "react-router-dom";

export default  function NavBar() {
    return (
        <div className="container">
                    
        <div className='container-pag'>
        
        <a href="#">SOBRE</a>
        <a href="#">HORÁRIOS DA COLETA</a>
        <a href="#">ARTIGOS</a>
        <a href="#">ECOPONTOS</a>
        </div>
        
        
        <div className='container-btnlogin'>

        <Link className="button" to="/Login">ADMIN</Link>
        
        </div>
    
    </div>
    
        
    );
}

