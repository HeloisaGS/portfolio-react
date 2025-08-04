import Header from './components/header';
import Home from './components/home';
import Sobre from './components/sobre';
import Projetos from './components/projetos';
import Contato from './components/contato';

const listaDeProjetos = [
  {
    image: "/image/hospitalAPI.png",
    title: "API - Hospital",
    description: "API REST desenvolvida em Javascript que permite gerenciamento e o cadastro de pacientes de um hospital",
    repoLink: "https://github.com/HeloisaGS/API_hospital",
  },
  {
    image: "/image/moodJourney.png",
    title: "Mood Journey",
    description: "Aplicativo de diário e gerenciamento de hábitos",
    repoLink: "https://github.com/AyrllanP/DSI",
  },
  {
    image: "/image/softex.png",
    title: "Workflow Plataform",
    description: "Projeto de conslusão do curso Softex-Pernambuco. Criação de página para comunicação secretaria-aluno.",
    repoLink: "https://github.com/Deborahnvaes/workflow-plataform-softex",
  },
];

export default function HomePage() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Sobre />
      <Projetos projetos={listaDeProjetos} />
      <Contato />
    </div>
  );
}
