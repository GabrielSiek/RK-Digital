import './CardPublico.css'

const CardPublico = ({texto, imagem, alt}) => {

    return (
        <section className='card-publico'>
            <h2 className='titulo-card-publico'>{texto}</h2>
            <img className='img-card-publico' src={`/imagens/${imagem}`} alt={alt}/>
        </section>
    )
}

export default CardPublico;