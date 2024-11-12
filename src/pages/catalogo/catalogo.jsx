import './catalogo.css';
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import api from '../../services/api';

function PageCatalogo() {
    const { id } = useParams(); // Obtém o ID do artigo da URL
    const [artigos, setArtigos] = useState([]);
    const [artigoSelecionado, setArtigoSelecionado] = useState(null);
    const [loading, setLoading] = useState(true); // Estado de loading
    const [error, setError] = useState(null); // Estado de erro

    const fetchArticles = async () => {
        try {
            const resposta = await api.get("/articles");
            setArtigos(resposta.data);
            if (id) {
                // Modificado para usar pk_IDarticle
                const artigoEncontrado = resposta.data.find(artigo => artigo.pk_IDarticle === parseInt(id));
                if (artigoEncontrado) {
                    setArtigoSelecionado(artigoEncontrado); // Define o artigo selecionado com base no ID
                } else {
                    setError("Artigo não encontrado."); // Mensagem de erro se o artigo não for encontrado
                }
            }
        } catch (err) {
            setError("Erro ao carregar os artigos."); // Mensagem de erro ao buscar artigos
            console.log(err);
        } finally {
            setLoading(false); // Finaliza o loading
        }
    };

    useEffect(() => {
        fetchArticles();
    }, [id]);

    const formatarData = (data) => {
        const opcoes = { day: 'numeric', month: 'long', year: 'numeric' };
        return new Date(data).toLocaleDateString('pt-BR', opcoes);
    };

    if (loading) {
        return <div>Carregando...</div>; // Exibe mensagem de loading
    }

    if (error) {
        return <div>{error}</div>; // Exibe mensagem de erro
    }

    return (
        <div className='container-catalogo'>
            {/* Logo e Navbar */}
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

            {/* Exibir detalhes do artigo selecionado */}
            {artigoSelecionado ? (
                <div className='container-not'>
                    <div className='container-titulo'>
                        <h2>{artigoSelecionado.title_article}</h2>
                        <div className='container-descricoes'>
                            <p>{formatarData(artigoSelecionado.date_article)}</p>
                            <h5>{artigoSelecionado.reference_article}</h5>
                        </div>
                    </div>
                    <img className='img-not-art' src={artigoSelecionado.image_article} alt='img' />
                    <p>{artigoSelecionado.description_article}</p>
                    <button onClick={() => setArtigoSelecionado(null)}>Voltar</button>
                </div>
            ) : (
                <div className='pai-outras-noticias'>
                    {artigos.map(artigo => (
                        <div className='container-not-um' key={artigo.pk_IDarticle}>
                            <img src={artigo.image_article} alt='img-noticia' className='img-not-dois' />
                            <h5>{artigo.title_article}</h5>
                            <p>{formatarData(artigo.date_article)}</p>
                            <Link to={`/catalogo/${artigo.pk_IDarticle}`} className='btn-not-um'>LEIA MAIS</Link>
                        </div>
                    ))}
                </div>
            )}

            {/* Footer */}
            <div className='container-footer'>
                <img src="/img/logo-v2.svg" alt="logo" className='logo-verdois' />
                <p>Seu guia para um futuro <br /> mais verde.</p>
                <a href="#top" className='botao-voltar'>
                    <img className='img-voltar-cat' src='/img/btn-voltar.svg' alt='Voltar ao topo' />
                </a>
                <div className='container-footer-btn'>
                    <a href="/horariocoleta">ARTIGOS</a>
                    <a href="/funcionalidades">SOBRE</a>
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