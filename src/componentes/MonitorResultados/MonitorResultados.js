import './MonitorResultados.css'
import {BotaoContato} from '../Botao/Botao';
import { useState, forwardRef } from 'react';


const MonitorResultados = forwardRef((props, ref) => {

    const [numMonitor, setNumMonitor] = useState(900000);

    function increaseNumber(numMonitor) {
        while(numMonitor <= 100000) {
            setNumMonitor(numMonitor++);
        }
    }

    function ativarAnim() {
    }

    return (
        <section  ref={ref}  id="monitor-resultados"  className='container-monitor-resultados'>
            <img src='/imagens/monitor-resultados.webp' className='monitor-resultados'/>
            <div className='container-titulo-monitor-resultados'>
                <h1 className='titulo-monitor-resultados'>Um pouco sobre a RK Digital</h1>
            </div>
            
            <div className='container-milhao-resultados'>
                <h2 className='milhao-resultados'>+R$1.000.000</h2>
                <h2 className='sub-milhao-resultados'>Faturados em 3 anos de atuação no mercado digital</h2>

                <div className='bt-milhao-resultados'>
                    <BotaoContato estilo='primario'>Converse com a gente!</BotaoContato>
                </div>
            </div>
            
        </section>
        
    )
})

export default MonitorResultados;