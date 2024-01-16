import './Footer.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faTiktok, faPinterest, faTwitter, faLinkedin} from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <div id="footer" className="padding-64-16 text-center">
            <div className="font-size-24 h-opac">
                <FontAwesomeIcon icon={faFacebook} className="footer-icon" />
                <FontAwesomeIcon icon={faInstagram} className="footer-icon" />
                <FontAwesomeIcon icon={faTiktok} className="footer-icon" />
                <FontAwesomeIcon icon={faPinterest} className="footer-icon" />
                <FontAwesomeIcon icon={faTwitter} className="footer-icon" />
                <FontAwesomeIcon icon={faLinkedin} className="footer-icon" />
            </div>
            <p className="margin-15-0 h-opac">Powered by w3.css</p>
        </div>
    );
}

export default Footer;