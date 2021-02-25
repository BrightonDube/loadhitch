import React from 'react';
import { Carousel } from 'react-bootstrap';
import styles from '../styles/Slider.module.css';

const values = [
    {
        title: 'Slider 1 Running',
        imgUrl: 'https://www.wallpaperbetter.com/wallpaper/535/435/724/volvo-fh16-750-truck-road-speed-1080P-wallpaper.jpg',
        buttonText: 'Learn More'
    },
    {
        title: 'Slider 2 Running',
        imgUrl: 'https://wonderfulengineering.com/wp-content/uploads/2014/05/truck-truck.jpg',
        buttonText: 'Learn More'
    },
    {
        title: 'Slider 3 Running',
        imgUrl: 'https://images6.alphacoders.com/565/565678.jpg',
        buttonText: 'Learn More'
    }
]

const Slider = () => (
    <div className={styles.slider}>
        <Carousel>
            {
                values.map((item, key) => (
                    <Carousel.Item key={key}>
                        <img
                            className="w-100"
                            src={item.imgUrl}
                            alt="Slider"
                        />
                        <Carousel.Caption >
                            <h1>
                                {item.title}
                            </h1>
                            <button>{item.buttonText}</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))
            }
        </Carousel >
    </div>
)

export default Slider
