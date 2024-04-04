import './TextoResultados.css'

const TextoResultados = ({titulo, texto, direcao, imagem, alt}) => {
    
    return (
        <section className= {`item-resultado item-${direcao}`}>
            <div className='secao-1-resultados'>
                <h1 className='titulo-resultados'>{titulo}</h1>
                <p className='texto-resultados'>{texto}</p>
            </div>

            <section className='card-resultados'>
                <img className={`img-resultados img-${direcao}`} src={`/imagens/${imagem}`} alt={alt}/>
            </section>
        </section>
    )
}

export default TextoResultados;