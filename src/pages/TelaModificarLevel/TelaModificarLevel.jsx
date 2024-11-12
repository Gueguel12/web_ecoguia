import { Link } from 'react-router-dom';
import "./TelaModificarLevel.css";

function TelaModificarLevel (){
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
                <h2><span className='highlight'>Alteração</span>de Levels</h2>
                <img src='/img/retangulo-hcoleta.svg' alt='retangulo-hcoleta' className='retang-coleta'/>
                <p>Crie e exclua Levels!</p>
                </div>
                <div className='pai-container-mod-level'>
                <div className='container-level'>
                <img src="/img/img-tela-level.svg" alt="foto-modificarlevel" className='img-level' />
                </div>
                <div className='container-mod-level'>
                <h2>Adicione o Level:</h2>
                
                <div className='container-input'>
                <input type="number" className="level-input" placeholder="INSIRA O LEVEL"/>
                <div className='container-btns'>
                <button className='btn-level-add' type="button">ADICIONAR</button>
                <button className='btn-level-excluir' type="button">EXCLUIR</button>
                </div>
                </div>
                </div>

                <div className='container-lista-level'>
                <h3>Lista de Levels:</h3>

                </div>

                </div>

    </div>

    );
}

export default TelaModificarLevel;