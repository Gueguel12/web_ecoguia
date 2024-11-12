import { Link } from 'react-router-dom';
import "./telaAltIcons.css";


function TelaAltIcons() {
    return (
        <div className='container-catalogo'>
            <div className='container-logo'>
                <Link to="/">
                    <img className='img-logo-pag-artigo' src='/img/logo-pag-artigo.svg' alt='logo' />
                </Link>
            </div>
            <div className='container-navbar'>
                <a href="/">SOBRE</a>
                <a href="/">HORÁRIOS DAS COLETAS</a>
                <a href="/">ARTIGOS</a>
                <a href="/">ECOPONTOS</a>
            </div>
            <div className='btn-login'>
                <Link className="button" to="/Login">ADMIN</Link>
            </div>
            <div className='container-titulo-alt'>
                <h2><span className='highlight'>Icons</span>para Perfis</h2>
                <img src='/img/retangulo-hcoleta.svg' alt='retangulo-hcoleta' className='retang-coleta'/>
                <p>Edite o seu icone com a foto que preferir!<br></br> Clique no icone que quer editar.</p>
            </div>
            <div className='pai-container-alticons'>
            <div className='container-alticons'>
                {[...Array(9)].map((_, index) => (
                <Link key={index} to="/PagEditIcon" className='icon-link'> 
                <img className='img-icon-alt' src='/img/perfil-crud.svg' alt={`icon-${index}`} />
                </Link>
                    ))}
                </div>

               
            </div>
        </div>
    );
}

export default TelaAltIcons;
