import './Footer.css';

function Footer(){
    return(
        <div className='container-footer'>
        <img src="/img/logo-v2.svg" alt="logo" className='logo-verdois' />  
        <p>Seu guia para um futuro <br></br>mais verde.</p> 
        <a href="#top" className='botao-voltar'>
            <img src='/img/btn-voltar.svg' alt='Voltar ao topo' />
        </a>
        
        <div className='container-footer-btn'>
        <a href="#artigos">ARTIGOS</a>
        <a href="#sobre">SOBRE</a>
      
        </div>

        <div className='container-linha'>
        <img src="/img/line-footer.svg" alt="linha" className='linha-footer'/>
        <p>Copyright © 2024 | ECOGUIA | by ECO12BIOTEC</p>
        </div>

                      
        </div>
    )
}

export default Footer;