import Botao from '../Botao/Botao';
import CardServico from '../CardServico/CardServico';
import './Servicos.css';

const Servicos = () => {

    return (
        <section className='servicos'>
            <div className='bg-servicos'>
                <div className='container-titulo-servicos'>
                    <h2 className='titulo-servicos'>Serviços da RK Digital</h2>
                    <h3 className='subtitulo-servicos'>Clique nos cards para saber mais</h3>
                </div>
                 <div className='cards-servicos'>
                    <CardServico
                        icone='infoprodutos'
                        titulo='Lançamento de infoprodutos'
                        texto='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit, purus egestas gravida bibendum, felis dui cursus risus.'
                    ></CardServico>

                    <CardServico
                        icone='video'
                        titulo='Produção de Video Sales Letter'
                        texto='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit, purus egestas gravida bibendum, felis dui cursus risus.'
                    ></CardServico>

                    <CardServico
                        icone='site'
                        titulo='Desenvolvimento de landing pages'
                        texto='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit, purus egestas gravida bibendum, felis dui cursus risus.'
                    ></CardServico>

                    <CardServico
                        icone='identidade'
                        titulo='Desenvolvimento de identidade visual'
                        texto='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit, purus egestas gravida bibendum, felis dui cursus risus.'
                    ></CardServico>

                    <CardServico
                        icone='roteiro'
                        titulo='Criação de roteiros de venda'
                        texto='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit, purus egestas gravida bibendum, felis dui cursus risus.'
                    ></CardServico>
                </div>

                <div className='bt-servicos-dentro'>
                        <Botao estilo='primario'>Converse com a gente!</Botao>
                    </div>
            </div>

            <div className='bt-servicos-fora'>
                <Botao estilo='primario'>Converse com a gente!</Botao>
            </div>
        </section>
    )
}

export default Servicos;