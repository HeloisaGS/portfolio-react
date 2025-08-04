import './App.css';
import Header from './components/header';
import Home from './components/home';
import Sobre from './components/sobre';
import Projetos from './components/projetos';
import softex from './image/softex.png';
import moodJourney from './image/moodJourney.png';
import hospitalAPI from './image/hospitalAPI.png';
import Contato from './components/contato';

const listaDeProjetos = [
   {
    image: hospitalAPI,
    title: "API - Hospital",
    description: "API REST desenvolvida em Javascript que permite gerenciamento e o cadastro de pacientes de um hospital",
    repoLink: "https://github.com/HeloisaGS/API_hospital",
  },
  {
    image: moodJourney,
    title: "Mood Journey",
    description: "Aplicativo de diário e gerenciamento de hábitos",
    repoLink: "https://github.com/AyrllanP/DSI",
  },
  {
    image: softex,
    title: "Workflow Plataform",
    description: "Projeto de conslusão do curso Softex-Pernambuco. Criação de página para comunicação secretaria-aluno.",
    repoLink: "https://github.com/Deborahnvaes/workflow-plataform-softex",
  },
]

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Sobre/>
      <Projetos projetos={listaDeProjetos} />
      <Contato/>
    </div>
  );
}

export default App;
