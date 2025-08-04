import Image from 'next/image';

function Sobre(){
    return(
        <div className="min-h-screen bg-blu}tify-center flex-col text-center">
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
                <Image 
                    src="/image/java.png" 
                    alt="java" 
                    width={70}
                    height={50}

                />
                <Image
                    src="/image/javaScript.png" 
                    alt="javaScript" 

                    width={50}
                    height={50} 
                />
                <Image
                    src="/image/react.png"
                    alt="React" 
 
                    width={50}
                    height={50}
                />
                <Image
                    src="/image/python.png" 
                    alt="Pyhton" 
 
                    width={50}
                    height={50}
                />
                <Image
                    src="/image/mySql.png" 
                    alt="MySql" 
 
                    width={80}
                    height={50}
                />
                <Image
                    src="/image/postgreSql.png"
                    alt="postgreSql" 
                    width={80}
                    height={50}
                />
            </div>
            
        
        </div>
    );
};

export default Sobre;
