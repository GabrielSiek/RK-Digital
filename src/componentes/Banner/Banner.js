import Botao from '../Botao/Botao';
import './Banner.css'

const Banner = () => {
    
    return (
        <section className='banner'>
            <div className='secao-1-banner'>
                <h1 className='titulo-banner'><span className='span-banner'>Transforme</span> as vendas do seu produto com a RK Digital</h1>
                <Botao className='bt-banner' estilo='primario'>Converse com a gente!</Botao>
            </div>
            <img className='foguete-banner'src='/imagens/foguete-banner.png' alt='foguete decolando'/>
        </section>
    )
}

export default Banner;