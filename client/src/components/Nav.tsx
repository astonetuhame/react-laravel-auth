import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
            </ul>
            <ul className="navbar-nav mx-auto ">
                <li className="nav-item">
                    <Link to="/login" className="nav-link">Login</Link>
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-link">Register</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
