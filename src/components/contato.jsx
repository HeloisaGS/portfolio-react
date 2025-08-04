import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

function Contato(){
    return(
        <div className="min-h-screen bg-blue-100 flex items-center justify-center flex-col text-center">
            <div className="text-left mx-20">
                <h1 className="text-5xl font-bold mb-2 ">Contato</h1>
            </div>
            <div className='flex flex-row m-20 space-x-20 flex-wrap'>
                <a href="https://github.com/HeloisaGS"><FaGithub size={48} /></a>
                <a href="https://www.linkedin.com/in/heloisa-gonçalves/"><FaLinkedin size={48} /></a>
                <a href="mailto:heloisagoncalves26@gmail.com"><BiLogoGmail size={48} /></a>
            </div>
        </div>
    );
};

export default Contato;
