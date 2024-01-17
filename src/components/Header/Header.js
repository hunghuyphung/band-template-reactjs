import './Header.css';
import Nav from "./Nav/Nav";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import {faBars} from "@fortawesome/free-solid-svg-icons/faBars";
import {useState} from "react";
import SubNav from "./Nav/SubNav";

function Header() {
    const [menuClicked, setMenuClicked] = useState(false);

    const showSubNav = () => {
        setMenuClicked(!menuClicked);
    };

    return (
        <div id="header">
            <Nav></Nav>
            <div className="search-btn hover-red hide-small">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            <div
                className="menu-btn hover-gray hide-large"
                onClick={showSubNav}
            >
                <FontAwesomeIcon icon={faBars} />
            </div>
            {menuClicked && <SubNav></SubNav>}
        </div>
    );
}

export default Header;