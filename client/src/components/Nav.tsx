import { Link } from "react-router-dom"
import axios from 'axios';

const Nav = ({user}:{user:any}) => {

    const logout = async () => {
         await axios.get('logout', {})
    }

    let links;
    if(user){
        links = (<ul className="navbar-nav mx-auto ">
                <li className="nav-item">
                <Link to="/ " onClick={logout } className="nav-link">Logout</Link>
                </li>
                
            </ul>)
    } else {
        links = (<ul className="navbar-nav mx-auto ">
                <li className="nav-item">
                    <Link to="/login" className="nav-link">Login</Link>
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-link">Register</Link>
                </li>
            </ul>)
    }
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
            </ul>
            {links}
        </nav>
    )
}

export default Nav
