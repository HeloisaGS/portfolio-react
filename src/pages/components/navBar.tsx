import {  useState } from "react"
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

function NavBar() {
    const [openMenu, setOpenMenu] = useState(false);
    return(
        <nav>
            <div className="md:hidden">
                {openMenu ? (
                    <IoClose  size={30} onClick={() => setOpenMenu(false)} className="cursor-pointer"/>
                ):(
                    <IoMenu  size={30} onClick={() => setOpenMenu(true)} className="cursor-pointer"/>
                )}
                
            </div>
            
            <ul className="hidden md:flex gap-6 text-sm md:text-base"> 
                <li><a href="#home">Home</a></li>
                <li><a href="#sobre">Sobre mim</a></li>
                <li><a href="#projetos">Projetos</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>
            
            {openMenu && (
                <div className="fixed top-16 left-0 w-full bg-white dark:bg-dark  h-screen flex flex-col items-center justify-center gap-6 text-lg z-40 md:hidden">
                    <ul className="md:hidden flex flex-col items-center gap-4 text-sm md:text-base"> 
                        <li><a href="#home" className="text-lg" onClick={() => setOpenMenu(false)}>Home</a></li>
                        <li><a href="#sobre" className="text-lg" onClick={() => setOpenMenu(false)} >Sobre mim</a></li>
                        <li><a href="#projetos" className="text-lg" onClick={() => setOpenMenu(false)} >Projetos</a></li>
                        <li><a href="#contato" className="text-lg" onClick={() => setOpenMenu(false)} >Contato</a></li>
                    </ul>
                </div>
            )}          
            

        </nav>
        
    );
};

export default NavBar;

