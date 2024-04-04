import './MonitorResultados.css'
import Botao from '../Botao/Botao';


const MonitorResultados = () => {

    return (
        <section className='container-monitor-resultados'>
            <img src='/imagens/monitor-resultados.png' className='monitor-resultados'/>
            <div className='container-titulo-monitor-resultados'>
                <h1 className='titulo-monitor-resultados'>Um pouco sobre a RK Digital</h1>
            </div>
            
            <div className='container-milhao-resultados'>
                <h2 className='milhao-resultados'>+R$1.000.000</h2>
                <h2 className='sub-milhao-resultados'>Faturados em 3 anos de atuação no mercado digital</h2>

                <div className='bt-milhao-resultados'>
                    <Botao estilo='primario'>Converse com a gente!</Botao>
                </div>
            </div>
            
        </section>
        
    )
}

export default MonitorResultados;