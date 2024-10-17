import './Navbar.scss'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {

    const currentRoute = window.location.pathname;

    return (
        <nav className='nav'>
            <ul className='nav_list'>
                <li>
                    <NavLink to='/' className={({ isActive }) => isActive ? "active" : "notActive"}>
                        Accueil
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/a-propos' className={({ isActive }) => isActive ? "active" : "notActive"}>
                        A Propos
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar;
