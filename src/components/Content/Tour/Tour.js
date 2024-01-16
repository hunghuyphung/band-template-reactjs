import './Tour.css';
import nyImg from '../../../assets/newyork.jpg';
import parisImg from '../../../assets/paris.jpg';
import sanfranImg from '../../../assets/sanfran.jpg';
import TourCard from "../TourCard/TourCard";

const tourPlaces = [
    {
        id: 1,
        name: 'New York',
        image: nyImg,
        date: 'Fri 27 Nov 2016',
        desc: 'Praesent tincidunt sed tellus ut rutrum sed vitae justo.'
    },
    {
        id: 2,
        name: 'Paris',
        image: parisImg,
        date: 'Sat 28 Nov 2016',
        desc: 'Praesent tincidunt sed tellus ut rutrum sed vitae justo.'
    },
    {
        id: 3,
        name: 'San Francisco',
        image: sanfranImg,
        date: 'Sun 29 Nov 2016',
        desc: 'Praesent tincidunt sed tellus ut rutrum sed vitae justo.'
    }
];

function Tour() {
    return (
        <div className="padding-64-16 content-width margin-auto">
            <h2 className="letter-spacing-4 color-white">TOUR DATES</h2>
            <p className="margin-15-0 h-opac color-white"><i>Remember to book your tickets!</i></p>
            <br/>
            <ul>
                <li className="padding-8-16 color-grey bc-white border-bottom text-justify">
                    September
                    <span className="padding-0-8 margin-left-16 bc-red color-white" style={{display: "inline-block"}}>Sold out</span>
                </li>
                <li className="padding-8-16 color-grey bc-white border-bottom text-justify">
                    October
                    <span className="padding-0-8 margin-left-16 bc-red color-white" style={{display: "inline-block"}}>Sold out</span>
                </li>
                <li className="padding-8-16 color-grey bc-white border-bottom text-justify display-flex flex-between">
                    November
                    <span className="bc-black color-white ticket-number">3</span>
                </li>
            </ul>
            <div id="tour-places" className="flex-column-small">
                {tourPlaces.map((tourPlace) => <TourCard key={tourPlace.id} tourPlace={tourPlace}/>)}
            </div>
        </div>
    );
}

export default Tour;