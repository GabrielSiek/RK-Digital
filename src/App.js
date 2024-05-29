import './global.css'

import Header from './componentes/Header/Header';
import Banner from './componentes/Banner/Banner';
import Publico from './componentes/Publico/Publico';
import MonitorResultados from './componentes/MonitorResultados/MonitorResultados';
import Resultados from './componentes/Resultados/Resultados';
import Servicos from './componentes/Servicos/Servicos';
import { useRef } from 'react';
function App() {

  const sobreNosRef = useRef(null)
  const resultadosRef = useRef(null)
  const servicosRef = useRef(null)

  const scrollToSobreNos = () => {
    const element = document.getElementById('publico');
    const yOffset = -120; 
    const yPosition = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: yPosition, behavior: 'smooth' });
  }

  const scrollToResultados = () => {
    const element = document.getElementById('monitor-resultados');
    const yOffset = -120; 
    const yPosition = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: yPosition, behavior: 'smooth' });
  };

  const scrollToServicos = () => {
    servicosRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
   <>
    <Header onClickSobreNos={scrollToSobreNos} onClickResultados={scrollToResultados} onClickServicos={scrollToServicos}/>
    <Banner></Banner>
    <Publico ref={sobreNosRef} onClickServicos={scrollToServicos}></Publico>
    <MonitorResultados ref={resultadosRef}/>
    <Resultados/>
    <Servicos ref={servicosRef}/>
   </>
  );
}

export default App;
