import "./TelaEsqueciSenha.css"

import { Link } from "react-router-dom";

function TelaEsqueciSenha(){
    return(
        <div className='pai-container'>
            <div className='container-senha'>
            <img src='/img/img-redefinir-senha.svg' alt='img-um' className='imgum-telalogin' />
            <div className="container-redefinir">
            <img src='/img/logo-telalogin.svg' alt='img-um' className='logo-telalogin' />
            <h2>Redefinir Senha</h2>
            <p>Informe o e-mail para o qual deseja<br></br>redefinir a sua senha.</p>
            <input type="text" id="input-email" className="cad-input-redefinir" placeholder="seuemail@ecoguia.com" />
            <Link className="btn-redefinir" to="/TelaToken">Redefinir Senha</Link>
            <Link className="retornar-login" to="/Login">Voltar ao Login</Link>
            </div>

            </div>


        </div>

    )
}

export default TelaEsqueciSenha;

