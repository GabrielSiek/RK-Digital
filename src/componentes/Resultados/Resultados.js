import {BotaoContato} from '../Botao/Botao';
import TextoResultados from '../TextoResultados/TextoResultados';
import './Resultados.css'

const Resultados = () => {

    return  (
        <section  className='resultados'>
            <div className='bg-texto-resultados'>
                <TextoResultados 
                titulo='+4.500 vendas realizadas pela internet'
                texto='Nossa empresa dispõe de uma equipe completa de profissionais, especializados em diversas áreas focadas na venda direta e indireta de produtos digitais.'
                imagem='moedas-resultados.webp'
                alt='modelo 3d de moedas empilhadas'
                ></TextoResultados>
                <TextoResultados 
                titulo='Estratégias testadas e validadas em mais  de 10 nichos'
                texto='Com anos no mercado digital. Nossa empresa usa estratégias comprovadas em mais de 10 nichos, adaptadas para atender às necessidades únicas de cada setor.'
                imagem='garoto-resultados.webp'
                alt='modelo 3d de garoto usando computador'
                direcao='inverso'
                ></TextoResultados>

                <div className='bt-resultados-dentro'>
                    <BotaoContato estilo='azul-escuro'>Converse com a gente!</BotaoContato>
                </div>
            </div>

            <div className='bt-resultados-fora'>
                <BotaoContato estilo='primario'>Converse com a gente!</BotaoContato>
            </div>
        </section>
        
    )
}

export default Resultados;