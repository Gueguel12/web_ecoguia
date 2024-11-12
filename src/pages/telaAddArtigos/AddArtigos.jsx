import "./AddArtigos.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import api from "../../services/api";

function AddArtigos() {
    const [noticias, setNoticias] = useState([]);
    const [currentNoticia, setCurrentNoticia] = useState({ title: "",category:"",description: "",image: "" ,reference:"" });
    const [editingIndex, setEditingIndex] = useState(null);

    const addNoticia = () => {
        if (editingIndex !== null) {
            const updatedNoticias = noticias.map((noticia, index) =>
                index === editingIndex ? currentNoticia : noticia
            );
            setNoticias(updatedNoticias);
            setEditingIndex(null);
        } else {
            setNoticias([...noticias, currentNoticia]);
        }
        setCurrentNoticia({ title: "", description: "", image: "" });
    };

    const addNewNoticia = async () => {
        try{
         const response = await api.post('/createArticle',{
           title:currentNoticia.title,
           category:currentNoticia.category,
           description:currentNoticia.description,
           image:currentNoticia.image,
           reference:currentNoticia.reference
         })
    alert(response.status)
       }
       catch(erro){
        alert("Algo deu errado: " +erro)
       }  
        
    }

    const editNoticia = (index) => {
        setCurrentNoticia(noticias[index]);
        setEditingIndex(index);
    };

    const deleteNoticia = (index) => {
        const updatedNoticias = noticias.filter((_, i) => i !== index);
        setNoticias(updatedNoticias);
    };

    return (
        <div className="container-addartigos">
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

            <div className="container-tit">
            <h3><span className='highlight'>Adicionar</span> Artigo </h3>

                <img src='/img/retangulo-hcoleta.svg' alt='retangulo-hcoleta' className='retang-coleta'/>
                <p>Contribua para a conscientização ambiental! Utilize esta página para publicar artigos<br></br> e notícias que promovam práticas sustentáveis.</p>
                </div>

            <div className="pai-container-addnoticia">
            

                <div className="container-info-crud">
               <input 
                    type="description" 
                    placeholder="URL da Imagem" 
                    value={currentNoticia.image} 
                    onChange={(e) => setCurrentNoticia({ ...currentNoticia, image: e.target.value })} 
                />

                <button onClick={addNewNoticia}>{editingIndex !== null ? "Atualizar" : "Adicionar"}</button>

               
               </div>

            <div className="container-addnoticia">
            <input 
                    type="description" 
                    placeholder="Título" 
                    value={currentNoticia.title} 
                    onChange={(e) => setCurrentNoticia({ ...currentNoticia, title: e.target.value })} 
                />
                 <select id="options" value={currentNoticia.category} onChange={(e) => setCurrentNoticia({...currentNoticia, category: e.target.value})} >
                    <option value="">Selecione a categoria...</option>
                    <option value="Faça você mesmo">Faça você mesmo</option>
                    <option value="Notícia">Notícia</option>
                    <option value="Artigo">Artigo</option>
                </select>
            <input 
                    type="description" 
                    placeholder="Referência" 
                    value={currentNoticia.reference} 
                    onChange={(e) => setCurrentNoticia({ ...currentNoticia, reference: e.target.value })} 
                />
                <textarea 
                    placeholder="Texto da Notícia" 
                    value={currentNoticia.description} 
                    onChange={(e) => setCurrentNoticia({ ...currentNoticia, description: e.target.value })} 
                />
           
           
            </div>
                                          
            </div>

        </div>
    );
}

export default AddArtigos;
