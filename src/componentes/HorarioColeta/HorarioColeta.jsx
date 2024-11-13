import './HorarioColeta.css';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { useEffect, useState } from 'react';

function HorarioColeta() {
    const [artigos, setArtigos] = useState([]);

    const fetchArticles = async () => {
        try {
            const resposta = await api.get("/articles");
            setArtigos(resposta.data);
        } catch (error) {
            alert("Erro ao pegar os dados");
            console.log(error);
        }
    };

    useEffect(() => {
        fetchArticles();
    }, []);

    const handleArticleSelect = (artigo) => {
        setArtigoSelecionado(artigo); // Armazena o artigo selecionado
    };

    const formatarData = (data) => {
        const opcoes = { day: 'numeric', month: 'long', year: 'numeric' };
        return new Date(data).toLocaleDateString('pt-BR', opcoes);
    };

    return (
        <div className='coleta-container'>
            <div className='horario-container'>
                <img src="/img/horariocoleta.svg" alt="foto-horariocoleta" className='icon-hc' />
            </div>
            <div className='hc-container'>
                <h2><span className='highlight'> Horários </span> da Coleta </h2>
                <img src='/img/retangulo-hcoleta.svg' alt='retangulo-hcoleta' className='ret-coleta' />
                <p>Confira através do seu CEP, quais são os horários e datas que os caminhões<br /> de coleta padrão e coleta sustentável passam em sua rua!</p>
                <div className='hc-botao'>
                    <input type="number" id="input-id" className="form-input" placeholder="INSIRA O CEP" />
                    <button className='btn-cep' type="button">BUSCAR</button>
                </div>
            </div>
            <div className='containerCatalogo'>
                <img src="/img/folhas.svg" alt="img-folhas" className='folhas' />
            </div>

            <div className='container-artigos'>
                <h2><span className='highlight'> Catálago </span> Sustentável</h2>
                <img src='/img/icon-artigos.svg' alt='globo-artigos' className='g-artigos' />
                <img src='/img/retangulo-hcoleta.svg' alt='retangulo-artigos' className='ret-artigos' />
                <p>Encontre toda informação necessária para ter uma<br />vida mais sustentável e um consumo consciente!</p>
            </div>

            <div className='pai-div-parte'>
                <div className='container-artigo-grande'>
                    {artigos.length > 0 && (
                        <>
                            <img src={artigos[0].image_article} alt={artigos[0].title_article} className='img-not-grande' />
                            <h4>{artigos[0].title_article}</h4>
                            <p>{formatarData(artigos[0].date_article)}</p>
                            <Link to={`/catalogo`} className='link-clicavel'></Link>
                        </>
                    )}
                </div>

                <div className='container-artigos-pequenos'>
                    {artigos.slice(1, 4).map((artigo) => (
                        <div className='container-artigo-pequeno' key={artigo.pk_IDarticle}>
                            <img src={artigo.image_article} alt={artigo.title_article} className='img-not-pequena' />
                            <div className='texto-artigo'>
                                <h5>{artigo.title_article}</h5>
                                <p className='data-artigo'>{formatarData(artigo.date_article)}</p>
                            </div>
                            <Link to={`/catalogo`} className='link-clicavel'></Link>
                        </div>
                    ))}
                </div>
            </div>

            <div className='container-FimCatalogo'>
                <img src="/img/folhas.svg" alt="img-folhas" className='FimFolhas' />
            </div>

            <div className='container-EcoPonto'>
                <h2><span className='highlight'> ECO</span>PONTO</h2>
                <img src='/img/retangulo-hcoleta.svg' alt='retangulo-ecoponto' className='ret-ecoponto' />
                <p>Recicle nos ecopontos perto de você! Confira no<br /> mapa interativo o mais próximo!</p>
                <div className='container-mapa'>
                    <iframe src="https://www.google.com/maps/d/embed?mid=1Kok7L5JyjXN758y3vy3kMsKYdJylrQE&hl=pt-BR&ehbc=2E312F" width="640" height="480"></iframe>
                </div>
                <div className='container-ajudasp'>
                    <img src='/img/ajuda-sp.svg' alt='ajuda sao paulo' className='ajuda-sp' />
                </div>
            </div>
        </div>
    );
}

export default HorarioColeta;