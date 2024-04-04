import './global.css'

import Header from './componentes/Header/Header';
import Banner from './componentes/Banner/Banner';
import Publico from './componentes/Publico/Publico';
import MonitorResultados from './componentes/MonitorResultados/MonitorResultados';
import Resultados from './componentes/Resultados/Resultados';
import Servicos from './componentes/Servicos/Servicos';
function App() {

  return (
   <>
    <Header/>
    <Banner></Banner>
    <Publico></Publico>
    <MonitorResultados></MonitorResultados>
    <Resultados></Resultados>
    <Servicos></Servicos>
   </>
  );
}

export default App;
