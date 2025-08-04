import NavBar from './navBar';
import Theme from './theme';


function Header(){
    return(
        <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 text-black dark:text-white shadow-md z-50">
            <div className="flex  items-center justify-between px-6 py-4 max-w-7xl mx-auto">
                <Theme/>
                <NavBar/>
            </div>
        </header>
    )
}
export default Header