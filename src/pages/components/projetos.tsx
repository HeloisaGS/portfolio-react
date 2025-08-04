import CardProjeto from "./cardProjeto";
import { StaticImageData } from 'next/image';

interface Projeto{
    image: StaticImageData |string;
    title: string;
    description: string;
    repoLink: string;
}

interface ProjetosProps{
    projetos: Projeto[];
}

function Projetos({projetos}: ProjetosProps){
    return(
        <div className="min-h-screen bg-blue-100 flex items-center justify-center flex-col text-center">
            <div className="flex flex-col  items-center mx-20">
                <div className="text-left mx-20">
                    <h1 className="text-5xl font-bold mb-2">Projetos</h1>
                </div>
                <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {projetos.map((project, index) => (
                        <CardProjeto
                        key={index}
                        image={project.image}
                        title={project.title}
                        description={project.description}
                        repoLink={project.repoLink}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projetos;