import Estilo from './Componentes/Estilo.css'
import Titulo from './Componentes/Titulo'
import image from './Componentes/JsonInforme'
import Lista from './Componentes/Lista'
import Footer from './Componentes/Footer'

function App() {
  return (
   <>
   
   <Titulo  Titulo='Olá! Este é meu Primeiro Projeto React do Zero.'/>
   <Titulo  Subtitulo='Aqui coloquei algumas informações de lugares legais.'/>
   <Lista/>
   <Footer/>
   
   </>
  );
}

export default App;
