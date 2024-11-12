import NavBar from "../../componentes/NavBar/Navbar";
import Inicio from "../../componentes/Inicio/Inicio";
import Funcionalidades from "../../componentes/Funcionalidades/Funcionalidades";


//importa tudo que tem dentro da home, ou seja, todos os componentes

export default function Home() {
    return (
        <div>
            <NavBar />
            <Inicio />
            <Funcionalidades />
        </div>
    );
}

