import './Nav.css';

function SubNav() {
    return (
        <div id="sub-nav">
            <button className="nav-button text-justify hover-gray width-100">Band</button>
            <button className="nav-button text-justify hover-gray width-100">Tour</button>
            <button className="nav-button text-justify hover-gray width-100">Contact</button>
            <button className="nav-button text-justify hover-gray width-100">Merch</button>
        </div>
    )
}

export default SubNav;