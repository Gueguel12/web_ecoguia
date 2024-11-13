import './catalogo.css';
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import api from '../../services/api';

function PageCatalogo() {
    const [artigos, setArtigos] = useState([]);
    const [artigoSelecionado, setArtigoSelecionado] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchArticles = async () => {
        try {
            const resposta = await api.get("/articles");
            setArtigos(resposta.data);
        } catch (err) {
            setError("Erro ao carregar os artigos.");
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchArticles();
    }, []);

    const formatarData = (data) => {
        const opcoes = { day: 'numeric', month: 'long', year: 'numeric' };
        return new Date(data).toLocaleDateString('pt-BR', opcoes);
    };

    const handleArticleSelect = (artigo) => {
        setArtigoSelecionado(artigo);
    };

    //Altera o \n por <br /> para quebrar linhas e coloca a cor verde em elementos em negrito
    const formatarConteudo = (conteudo) => {
        return conteudo
            .replace(/\n/g, '<br />')
            .replace(/<strong>(.*?)<\/strong>/g, '<strong class="bold-highlight">$1</strong>');
    };

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className='container-catalogo'>
            <div className='container-logo'>
                <Link to="/">
                    <img className='img-logo-pag-artigo' src='/img/logo-pag-artigo.svg' alt='logo' />
                </Link>
            </div>
            <div className='container-navbar'>
                <Link to="/">SOBRE</Link>
                <Link to="/horariocoleta">HORÁRIOS DAS COLETAS</Link>
                <Link to="/catalogo">ARTIGOS</Link>
                <Link to="/">ECOPONTOS</Link>
            </div>
            <div className='btn-login'>
                <Link className="button" to="/Login">ADMIN</Link>
            </div>

            {artigoSelecionado ? (
                <div className='container-not'>
                    <div className='container-titulo'>
                        <h5 className='data'>{formatarData(artigoSelecionado.date_article)}</h5>
                        <h2 className='titulo'>{artigoSelecionado.title_article}</h2>
                        <h5 className='fonte'>{artigoSelecionado.reference_article}</h5>
                    </div>
                    <img className='img-not-art' src={artigoSelecionado.image_article} alt='img' />
                    <p dangerouslySetInnerHTML={{ __html: formatarConteudo(artigoSelecionado.description_article) }}></p>
                    <button onClick={() => setArtigoSelecionado(null)}>Voltar</button>
                </div>
            ) : (
                <div className='pai-outras-noticias'>
                    {artigos.map(artigo => (
                        <div className='container-not-um' key={artigo.pk_IDarticle}>
                            <img src={artigo.image_article} alt='img-noticia' className='img-not-dois' />
                            <h5>{artigo.title_article}</h5>
                            <p>{formatarData(artigo.date_article)}</p>
                            <button onClick={() => handleArticleSelect(artigo)} className='btn-not-um'>LEIA MAIS</button>
                        </div>
                    ))}
                </div>
            )}

            <div className='container-footer'>
                <img src="/img/logo-v2.svg" alt="logo" className='logo-verdois' />
                <p>Seu guia para um futuro <br /> mais verde.</p>
                <a href="#top" className='botao-voltar'>
                    <img className='img-voltar-cat' src='/img/btn-voltar.svg' alt='Voltar ao topo' />
                </a>
                <div className='container-footer-btn'>
                    <Link to="/horariocoleta">ARTIGOS</Link>
                    <Link to="/funcionalidades">SOBRE</Link>
                </div>
                <div className='container-linha'>
                    <img src="/img/line-footer.svg" alt="linha" className='linha-footer'/>
                    <p>Copyright © 2024 | ECOGUIA | by ECO12BIOTEC</p>
                </div>
            </div>
        </div>
    );
}

export default PageCatalogo;