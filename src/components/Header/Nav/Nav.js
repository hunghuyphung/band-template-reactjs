import './Nav.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSortDown} from "@fortawesome/free-solid-svg-icons/faSortDown";

function Nav() {
    return (
        <div id="nav">
            <button className="nav-button hover-gray">Home</button>
            <button className="nav-button hover-gray nav-hide-small">Band</button>
            <button className="nav-button hover-gray nav-hide-small">Tour</button>
            <button className="nav-button hover-gray nav-hide-small">Contact</button>
            <button className="nav-button hover-gray nav-hide-small">
                More
                <FontAwesomeIcon icon={faSortDown} style={{paddingBottom: '4px', paddingLeft: '2px'}} />
            </button>
        </div>
    );
}

export default Nav;