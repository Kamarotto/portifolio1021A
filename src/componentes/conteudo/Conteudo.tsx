
import './Conteudo.css'
import imagem from "./../img/foto-conteudo.png"

function Conteudo(){
    return(
        <div className="conteudo-content">
            <div className='imagens'> 
            <div><h4>Bom dia meu querido professor Guilherme Terenciani, estou aqui hoje fazendo vossa atividade para que você me de nota e eu passe de ano e seja uma pessoa muito feliz, foto sua ao lado, pois amo muito o senhor, obrigado pelos ensinamentos fodas.</h4></div>
            <img className='img-conteudo' src={imagem} alt="" />
            </div>
            </div>
    )
}

export default Conteudo