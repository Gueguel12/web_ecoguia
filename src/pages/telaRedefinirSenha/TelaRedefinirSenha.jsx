import "./TelaRedefinirSenha.css";
import { Link } from "react-router-dom";

function TelaRedefinirSenha(){
    return(
        <div className='pai-container'>
            <div className='container-senha'>
            <img src='/img/img-redef-senha.svg' alt='img-um' className='imgum-telalogin' />
            <div className="container-redefinir">
            <img src='/img/logo-telalogin.svg' alt='img-um' className='logo-telalogin' />
            <h2>Redefinir Senha</h2>
            <p>Informe a nova senha.</p>
            <input type="text" id="input-email" className="cad-input-token" placeholder="Senha" />
            <input type="text" id="input-email" className="cad-input-token" placeholder="Confirmar Senha" />
            <button className="btn-redef">Redefinir Senha</button>
            <Link className="retornar-login" to="/Login">Voltar ao Login</Link>
            </div>

            </div>


        </div>
    )
}

export default TelaRedefinirSenha;