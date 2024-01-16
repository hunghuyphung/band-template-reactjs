import './Header.css';
import Nav from "./Nav/Nav";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import {faBars} from "@fortawesome/free-solid-svg-icons/faBars";

function Header() {
    return (
        <div id="header">
            <Nav></Nav>
            <div className="search-btn hover-red hide-small">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            <div className="menu-btn hover-gray hide-large">
                <FontAwesomeIcon icon={faBars} />
            </div>
        </div>
    );
}

export default Header;