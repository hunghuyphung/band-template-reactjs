import './Content.css';
import Band from "./Band/Band";
import Tour from "./Tour/Tour";
import Contact from "./Contact/Contact";
import mapImg from '../../assets/map.jpg';

function Content() {
    const containerStyle = {
        paddingTop: '50%',
        background: `url(${mapImg}) top center / cover no-repeat`
    };

    return (
        <div id="content" className="text-center">
            <Band></Band>
            <div className="bc-black">
                <Tour></Tour>
            </div>
            <Contact></Contact>
            <div style={containerStyle}></div>
        </div>
    );
}

export default Content;