import Image from 'next/image';

function Home(){
    return(
        <div id="home" className="min-h-screen flex items-center justify-center flex-col text-center">
            <div className="flex flex-col sm:flex-row items-center mx-20">
                <div className=" order-2 sm:order-1 sm:text-left">
                    <h1 className="text-5xl font-bold mb-2">Fullstack Developer </h1>
                    <h2 className="text-3xl">Heloisa Gonçalves</h2>
                </div>
                <Image
                    src="/image/foto.png" 
                    alt="foto" 
                    className="order-1 sm:order-1 w-[200px] sm:w-[300px] object-cover rounded-full" 
                    width={300}
                    height={300}
                />
            </div>
        </div>
    );
};

export default Home;