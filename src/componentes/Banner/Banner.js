import {BotaoContato} from '../Botao/Botao';
import './Banner.css'

const Banner = () => {
    
    return (
        <section className='banner'>
            <div className='secao-1-banner'>
                <h1 className='titulo-banner'><span className='span-banner'>Transforme</span> as vendas do seu produto com a RK Digital</h1>
                <BotaoContato className='bt-banner' estilo='primario'>Converse com a gente!</BotaoContato>
            </div>
            <img className='foguete-banner'src='/imagens/foguete-banner.webp' alt='foguete decolando'/>
        </section>
    )
}

export default Banner;