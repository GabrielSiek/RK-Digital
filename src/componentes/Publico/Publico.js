import Botao from '../Botao/Botao';
import CardPublico from '../CardPublico/CardPublico';
import './Publico.css'


const Publico = () => {

    return (
            <section className='publico'>

                <div className='secao-1-publico'>
                    <h1 className='titulo-publico'>PARA QUEM É A RK?</h1>
                    <h2 className='subtitulo-publico'>A RK Digital é para quem deseja:</h2>

                    <div className='cards-publico'>
                        <CardPublico
                            texto="Construir o seu próprio negócio"
                            imagem="predio-publico.png"
                            alt="modelo 3d de prédio" />
                        <CardPublico
                            texto="Sair da estagnação e vendas baixas"
                            imagem="grafico-publico.png"
                            alt="modelo 3d de gráfico" />
                        <CardPublico
                            texto="Espalhar seu conhecimento para a internet"
                            imagem="laptop-publico.png"
                            alt="modelo 3d de laptop" />
                    </div>
                </div>
                
                <div className='botoes-publico'>
                    <Botao estilo="primario">Quero construir meu négocio</Botao>
                    <Botao estilo="secundario">Conhecer os serviços da RK</Botao>
                </div>

            </section>
    )
}

export default Publico;