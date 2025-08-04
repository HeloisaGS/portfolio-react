function NavBar() {
    return(
        <nav>
            <ul className="flex gap-6 text-sm md:text-base"> 
                <li><a href="#home">Home</a></li>
                <li><a href="#sobre">Sobre mim</a></li>
                <li><a href="#projetos">Projetos</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;

