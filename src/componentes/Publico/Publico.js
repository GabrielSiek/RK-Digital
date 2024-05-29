import { forwardRef } from 'react';
import {Botao, BotaoContato} from '../Botao/Botao';
import CardPublico from '../CardPublico/CardPublico';
import './Publico.css'


const Publico = forwardRef((props, ref) => {

    return (
            <section ref={ref} id='publico' className='publico'>

                <div className='secao-1-publico'>
                    <h1 className='titulo-publico'>PARA QUEM É A RK?</h1>
                    <h2 className='subtitulo-publico'>A RK Digital é para quem deseja:</h2>

                    <div className='cards-publico'>
                        <CardPublico
                            texto="Construir o seu próprio negócio"
                            imagem="predio-publico.webp"
                            alt="modelo 3d de prédio" />
                        <CardPublico
                            texto="Sair da estagnação e vendas baixas"
                            imagem="grafico-publico.webp"
                            alt="modelo 3d de gráfico" />
                        <CardPublico
                            texto="Espalhar seu conhecimento para a internet"
                            imagem="laptop-publico.webp"
                            alt="modelo 3d de laptop" />
                    </div>
                </div>
                
                <div className='botoes-publico'>
                    <BotaoContato estilo="primario">Quero construir meu négocio</BotaoContato>
                    <Botao onClick={props.onClickServicos} estilo="secundario">Conhecer os serviços da RK</Botao>
                </div>

            </section>
    )
})

export default Publico;