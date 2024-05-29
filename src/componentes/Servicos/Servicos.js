import {BotaoContato} from '../Botao/Botao';
import CardServico from '../CardServico/CardServico';
import './Servicos.css';
import { forwardRef } from 'react';

const Servicos = forwardRef((props, ref) => {

    return (
        <section ref={ref} className='servicos'>
            <div className='bg-servicos'>
                <div className='container-titulo-servicos'>
                    <h2 className='titulo-servicos'>Serviços da RK Digital</h2>
                    <h3 className='subtitulo-servicos'>Clique nos cards para saber mais</h3>
                </div>
                <div className='cards-servicos'>
                    <CardServico
                        icone='infoprodutos'
                        titulo='Lançamento de infoprodutos'
                        texto='Usamos estratégias que já faturaram +R$1.000.000,00 com infoprodutos para te ajudar com tudo que você precisa para fazer seu lançamento.'
                    ></CardServico>

                    <CardServico
                        icone='trafego'
                        titulo='Gestão de tráfego'
                        texto='Aumente os resultados do seu negócio utilizando anúncios pagos. Alcance mais pessoas através das suas redes sociais e turbine suas vendas.'
                    ></CardServico>

                    <CardServico
                        icone='email'
                        titulo='Gestão de e-mail marketing'
                        texto='Somos especialistas na ferramenta de E-mail Marketing mais utilizada no mundo, a ActiveCampaign. Automatize processos e venda muito mais.'
                    ></CardServico>

                    <CardServico
                        icone='video'
                        titulo='Produção de Video Sales Letter'
                        texto='Crie uma VSL com altíssima taxa de conversão para aumentar as vendas do seu produto. É tudo com a gente, desde o roteiro até a edição.'
                    ></CardServico>

                    <CardServico
                        icone='identidade'
                        titulo='Desenvolvimento de identidade visual'
                        texto='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit, purus egestas gravida bibendum, felis dui cursus risus.'
                    ></CardServico>

                    <CardServico
                        icone='site'
                        titulo='Desenvolvimento de landing pages'
                        texto='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit, purus egestas gravida bibendum, felis dui cursus risus.'
                    ></CardServico>


                </div>

                <div className='bt-servicos-dentro'>
                    <BotaoContato estilo='primario'>Converse com a gente!</BotaoContato>
                </div>
            </div>

            <div className='bt-servicos-fora'>
                <BotaoContato estilo='primario'>Converse com a gente!</BotaoContato>
            </div>
        </section>
    )
})

export default Servicos;