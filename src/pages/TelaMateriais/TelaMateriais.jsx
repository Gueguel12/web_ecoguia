import { Link } from 'react-router-dom';
import "./TelaMateriais.css";

function TelaMateriais(){
    return(
        <div className='container-catalogo'>
        <div className='container-logo'>
            <Link to="/">
                <img className='img-logo-pag-artigo' src='/img/logo-pag-artigo.svg' alt='logo' />
            </Link>
        </div>
        <div className='container-navbar'>
            <Link to="/">SOBRE</Link>
            <Link to="/">HORÁRIOS DAS COLETAS</Link>
            <Link to="/">ARTIGOS</Link>
            <Link to="/">ECOPONTOS</Link>
        </div>
        <div className='btn-login'>
            <Link className="button" to="/Login">ADMIN</Link>
        </div>
        <div className='container-titulo-alt'>
                <h2><span className='highlight'>Materiais</span>Recicláveis</h2>
                <img src='/img/retangulo-hcoleta.svg' alt='retangulo-hcoleta' className='retang-coleta'/>
                <p>Adicione e exclua máteriais recicláveis!</p>
                </div>
            <div className='pai-container-telamateriais'>
                <button className='botao-add'>OK +</button>
                <div className='container-alterar-material-um'>
                <div className='container-material-um'>
                <h1>10XP</h1>
                <h5>PLÁSTICO</h5>
                <button className='btn-um'>+</button>
                <button className='btn-dois'>-</button>

                </div>
                <div className='container-material-dois'>
                    <h1>20XP</h1>
                    <h5>PAPEL</h5>
                    <button className='btn-um'>+</button>
                    <button className='btn-dois'>-</button>
                </div>
                <div className='container-alterar-material-dois'>
                <div className='container-material-tres'>
                <h1>30XP</h1>
                <h5>METAL</h5>
                <button className='btn-um'>+</button>
                    <button className='btn-dois'>-</button>
                </div>
                <div className='container-material-quatro'>
                <h1>40XP</h1>
                <h5>VIDRO</h5>
                <button className='btn-um'>+</button>
                    <button className='btn-dois'>-</button>
                </div>
                <div className='container-material-cinco'>
                <h1>50XP</h1>
                <h5>ELETRÔNICOS</h5>
                <button className='btn-um'>+</button>
                    <button className='btn-dois'>-</button>
                </div>
                </div>

            </div>

            </div>
    </div>

    );
}

export default TelaMateriais;