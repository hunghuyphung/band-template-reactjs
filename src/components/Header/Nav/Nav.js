import './Nav.css';

function Nav() {
    return (
        <div id="nav">
            <button className="button hover-gray">Home</button>
            <button className="button hover-gray nav-hide-small">Band</button>
            <button className="button hover-gray nav-hide-small">Tour</button>
            <button className="button hover-gray nav-hide-small">Contact</button>
            <button className="button hover-gray nav-hide-small">More</button>
        </div>
    );
}

export default Nav;