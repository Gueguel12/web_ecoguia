import './Funcionalidades.css';

import HorarioColeta from '../HorarioColeta/HorarioColeta';
import Footer from '../Footer/Footer';

function Funcionalidades(){
 return (
    <div className='containerPrincipal'>
      
       <div className='container-MissaoValores'>
          <div className='caixa-simples'>
            <img src="/img/icone-nossamissao.svg" alt="icone-missao" className='icone' />
            <p className='titulo'>
              Nossa Missão
            </p>
            <p className='texto'>
              Fomentar a adoção de hábitos sustentáveis de maneira acessível e inspiradora, transformando a prática em algo divertido e educativo.
            </p>
          </div>
          <div className='caixa-simples'>
            <img src="/img/icone-nossavisao.svg" alt="icone-visao" className='icone' />
            <p className='titulo'>
              Nossa Visão
            </p>
            <p className='texto'>
              Queremos engajar as pessoas com a sustentabilidade e a reciclagem, tornando essas práticas mais envolventes e educativas.
            </p>
          </div>
          <div className='caixa-simples'>
            <img src="/img/icone-nossosvalores.svg" alt="icone-valores" className='icone' />
            <p className='titulo'>
              Nossos Valores
            </p>
            <p className='texto'>
              Promover a sustentabilidade com inovação e inclusão, tornando as práticas acessíveis e inspiradoras. Valorizar a educação e o engajamento em cada ação.
            </p>
          </div>
        </div>
        <div className='funcionalidades-container'>
            <h3 className='titulo-func'>Funcionalidades do Aplicativo</h3>
            
        <div className='aplicativo-container'>
        <div className='aplicativo-info'>
        <img src='/img/iconecoponto.svg' alt="icone-ecoponto" className='icone' />
        <p className='titulo-aplicativo'>ecopontos</p>
        <p className='texto-aplicativo'>Localizador de pontos de descarte para objetos recicláveis, facilitando a reciclagem responsável.</p>
        </div>
        <div className='aplicativo-seta'>
          <img src='/img/arrow.svg' className='arrow'/>
        </div>
        <div className='aplicativo-info'>
        <img src='/img/iconwiki.svg' alt="icone-wiki" className='icone' />
        <p className='titulo-aplicativo'>wiki</p>
        <p className='texto-aplicativo'>Fonte de informações e dicas sobre meio ambiente e sustentabilidade.</p>
        </div>
        <div className='aplicativo-seta'>
        <img src='/img/arrow.svg' className='arrow'/>
        </div>
        <div className='aplicativo-info'>
        <img src='/img/gamificacao.svg' alt="icone-gameficacao" className='icone' />
        <p className='titulo-aplicativo'>gameficação</p>
        <p className='texto-aplicativo'>Jogos para tornar a participação<br></br> em atividades ambientais mais divertida<br></br> e motivadora.</p>
        </div>
        
        </div>
               
        </div>
          <div className='btn-baixeagora'> 
          <button className='btn-baixar' type="button">
            BAIXE AGORA!
        </button>
          </div>
          <div>
          <HorarioColeta />
          </div>
          <div>
          <Footer/>  
          </div>
    
   
    </div>

 )
}

export default Funcionalidades;