import java from '../image/java.png';
import javaScript from '../image/javaScript.png';
import mySql from '../image/mySql.png';
import postgreSql from '../image/postgreSql.png';
import python from '../image/python.png';
import react from '../image/react.png'
function Sobre(){
    return(
        <div className="min-h-screen bg-blue-100 flex items-center justify-center flex-col text-center">
            <div className="text-left mx-[15%]">
                <h1 className="text-5xl font-bold mb-2 ">Sobre mim</h1>
                <br />
                <p>
                    Sou estudante de Bacharelado em Sistemas de Informação pela UFRPE, apaixonada por tecnologia, aprendizado contínuo e desenvolvimento de soluções criativas.
                </p>
                <br />
                <p>
                   Concluí um curso intensivo de formação em Front-End, com o objetivo de me aprimorar constantemente como desenvolvedora. Recentemente, passei a integrar a Seed a Bit, a Empresa Júnior de Tecnologia e Inovação da UFRPE, onde venho aplicando meus conhecimentos em projetos reais e colaborativos. 
                </p>
            </div>
            <div className='flex flex-row m-20 space-x-20 flex-wrap'>
                <img 
                    img src={java} 
                    alt="java" 
                    className="h-50 mb-5" 
                />
                <img 
                    img src={javaScript} 
                    alt="javaScript" 
                    className="h-50 mb-5" 
                />
                <img 
                    img src={react} 
                    alt="React" 
                    className="h-50 mb-5" 
                />
                <img 
                    img src={python} 
                    alt="Pyhton" 
                    className="h-50 mb-5" 
                />
                <img 
                    img src={mySql} 
                    alt="MySql" 
                    className="h-50 mb-5" 
                />
                <img 
                    img src={postgreSql} 
                    alt="postgreSql" 
                    className="h-50 mb-5" 
                />
            </div>
            
        
        </div>
    );
};

export default Sobre;
