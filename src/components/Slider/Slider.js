import './Slider.css';
import nyImg from '../../assets/ny.jpg';
import chicagoImg from '../../assets/chicago.jpg';
import laImg from '../../assets/la.jpg';
import {useLayoutEffect, useState} from "react";

const slidePlaces = [
    {
        name: 'New York',
        desc: 'The atmosphere in New York is lorem ipsum.',
        image: nyImg
    },
    {
        name: 'Chicago',
        desc: 'Thank you, Chicago - A night we won\'t forget.',
        image: chicagoImg
    },
    {
        name: 'Los Angeles',
        desc: 'We had the best time playing at Venice Beach!',
        image: laImg
    }
];

function Slider() {
    const [slideIndex, setSlideIndex] = useState(0);
    
    useLayoutEffect(() => {
        setTimeout(() => {
            if (slideIndex === 3) {
                setSlideIndex(0);
            } else {
                setSlideIndex(prevIndex => prevIndex + 1);
            }
        }, 4000);
    }, [slideIndex]);

    const index = slideIndex === 0 ? 0 : slideIndex - 1;

    return (
        <div id="slider">
            <img src={slidePlaces[index].image} alt="" style={{width: '100%'}}/>
            <div id="slide-heading" className="color-white text-center">
                <h3>{slidePlaces[index].name}</h3>
                <p className="margin-15-0 font-segoe"><b>{slidePlaces[index].desc}</b></p>
            </div>
        </div>
    );
}

export default Slider;