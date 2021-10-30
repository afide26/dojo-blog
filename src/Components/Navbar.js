import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-title">The Dojo Blog</div>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;