import './TourCard.css';
import Modal from "../../Modal/Modal";
import {useState} from "react";

function TourCard({tourPlace}) {
    const [modalDisplayed, setModalDisplayed] = useState(false);

    const handleDisplayModal = (value) => {
        setModalDisplayed(value);
    };

    return (
        <div className="text-justify tour-card">
            <img src={tourPlace.image} alt="" className="width-100 hover-opac"/>
            <div className="place-body bc-white color-black">
                <p><b>{tourPlace.name}</b></p>
                <p className="h-opac margin-15-0">{tourPlace.date}</p>
                <p className="margin-15-0">{tourPlace.desc}</p>
                <button
                    className="b-button bc-black color-white hover-gray"
                    onClick={() => handleDisplayModal(true)}
                >Buy Tickets
                </button>
            </div>
            {modalDisplayed && <Modal handleDisplayModal={handleDisplayModal}></Modal>}
        </div>
    );
}

export default TourCard;