import './Modal.css';
import {faBagShopping} from "@fortawesome/free-solid-svg-icons/faBagShopping";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons/faCartShopping";
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";
import {faCheck} from "@fortawesome/free-solid-svg-icons/faCheck";
import {faXmark} from "@fortawesome/free-solid-svg-icons/faXmark";

function Modal({handleDisplayModal}) {

    const handleClickClose = () => {
        handleDisplayModal(false);
    };

    return (
      <div id="modal">
          <div id="modal-content">
              <div className="modal-heading">
                  <h2>
                      <FontAwesomeIcon icon={faBagShopping} style={{width: '50px'}}/>
                      Tickets
                  </h2>
                  <div
                      className="heading-close hover-gray"
                      onClick={handleClickClose}
                  >
                      <FontAwesomeIcon icon={faXmark} />
                  </div>
              </div>
              <div className="padding-0-16">
                  <p className="margin-15-0">
                      <FontAwesomeIcon icon={faCartShopping}/> Tickets, $15 per person
                  </p>
                  <input type="text" className="b-input" placeholder="How many?"/>
                  <p className="margin-15-0">
                      <FontAwesomeIcon icon={faUser}/> Send To
                  </p>
                  <input type="text" className="b-input" placeholder="Enter Email"/>
                  <button className="b-button pay hover-gray">
                      PAY
                      <FontAwesomeIcon icon={faCheck} style={{marginLeft: '4px'}}/>
                  </button>
                  <div className="display-flex flex-between">
                      <button
                          className="b-button color-white footer-close hover-gray"
                          onClick={handleClickClose}
                      >
                          Close
                          <FontAwesomeIcon icon={faXmark} style={{marginLeft: '4px'}}/>
                      </button>
                      <p style={{marginTop: '15px'}}>
                          Need&nbsp;
                          <a
                              href="#"
                              style={{color: '#2196f3'}}
                          >
                              help?
                          </a>
                      </p>
                  </div>
              </div>
          </div>
      </div>
    );
}

export default Modal;