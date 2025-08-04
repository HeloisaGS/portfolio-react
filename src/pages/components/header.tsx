import NavBar from './navBar';
import Theme from './theme';


function Header(){
    return(
        <header className="fixed top-0 left-0 w-full  shadow-md z-50 bg-white dark:bg-dark">
            <div className="flex  items-center justify-between px-6 py-4 max-w-7xl mx-auto">
                <Theme/>
                <NavBar/>
            </div>
        </header>
    )
}
export default Header