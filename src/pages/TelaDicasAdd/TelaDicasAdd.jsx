import "./TelasDicasAdd.css";
import { Link } from 'react-router-dom';

function TelasDicasAdd(){
    return (
        <div className='container-catalogo'>
        <div className='container-logo'>
            <Link to="/">
                <img className='img-logo-pag-artigo' src='/img/logo-pag-artigo.svg' alt='logo' />
            </Link>
        </div>
        <div className='container-navbar'>
            <Link to="/Funcionalidades">SOBRE</Link>
            <Link to="/">HORÁRIOS DAS COLETAS</Link>
            <Link to="/">ARTIGOS</Link>
            <Link to="/">ECOPONTOS</Link>
        </div>
        <div className='btn-login'>
            <Link className="button" to="/Login">ADMIN</Link>
        </div>
        <div className='container-titulo-alt'>
                <h2><span className='highlight'>Dicas</span>Diárias</h2>
                <img src='/img/retangulo-hcoleta.svg' alt='retangulo-hcoleta' className='retang-coleta'/>
                <p>Adicione a dica aqui!</p>
            </div>
            <div className="pai-container-adddicas">
            <div className='container-adddicas'>
                    <textarea 
                        className='textarea-dicas' 
                        placeholder='Adicione sua dica aqui...' 
                        rows='4' 
                        cols='50'
                    ></textarea>
                    <button className='btn-add'>Adicionar Dica</button>
                </div>


            </div>
        </div>

    );

}

export default TelasDicasAdd;