import "./TelaToken.css";
import { Link } from "react-router-dom";

function TelaToken(){
    return(
        <div className='pai-container'>
            <div className='container-senha'>
            <img src='/img/img-token.svg' alt='img-um' className='imgum-telalogin' />
            <div className="container-redefinir">
            <img src='/img/logo-telalogin.svg' alt='img-um' className='logo-telalogin' />
            <h2>Token de Proteção</h2>
            <p>Informe o token de verificação que foi<br></br> enviado para o seu e-mail.</p>
            <input type="text" id="input-email" className="cad-input-token" placeholder="******" />
            <Link className="btn-redefinir" to="/TelaRedefinirSenha">Redefinir Senha</Link>
            <Link className="retornar-login" to="/Login">Voltar ao Login</Link>
            </div>

            </div>


        </div>
    )
}

export default TelaToken;