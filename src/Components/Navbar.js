import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="nav-title-link"><div className="nav-title">The Dojo Blog</div></Link>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;