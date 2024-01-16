import './TourCard.css';

function TourCard({tourPlace}) {
    return (
        <div className="text-justify tour-card">
            <img src={tourPlace.image} alt="" className="width-100 hover-opac"/>
            <div className="place-body bc-white color-black">
                <p><b>{tourPlace.name}</b></p>
                <p className="h-opac margin-15-0">{tourPlace.date}</p>
                <p className="margin-15-0">{tourPlace.desc}</p>
                <button className="b-button bc-black color-white hover-gray">Buy Tickets</button>
            </div>
        </div>
    );
}

export default TourCard;