import { useState } from 'react';
import './Slider.scss'
import { withResizeDetector } from 'react-resize-detector';

const content = [
    'img/slide.png',
    'img/slide.png',
    'img/slide.png',
    'img/slide.png',
    'img/slide.png',
    'img/slide.png',
    'img/slide.png',
]

const Slider = ({ width, height }) => {
    const [position, setPosition] = useState(0)
    const itemWidth = 260

    const prevHandler = () => {
        console.log(position)
        if(position != 0) {
            if(position - itemWidth < 0){
                setPosition(0)
            } else {
                setPosition(position - itemWidth)
            }
        }
        console.log(position)
    }

    const nextHandler = () => {
        console.log(position)
        console.log(itemWidth * content.length, width)
        if(position != itemWidth * content.length - width) {
            if(position + itemWidth > itemWidth * content.length - width){
                setPosition(itemWidth * content.length - width)
            } else {
                console.log(itemWidth + itemWidth)
                setPosition(position + itemWidth)
            }
        }
        console.log(position)
    }

    return (
        <div className="slider">
            <div className="slider__track">
                <div className="slider__line"
                    style={{transform: `translateX(-${position}px)`, width: `${content.length * 260}px`}}
                >
                    {content.map((slide) => {
                        return (
                            <div className="slider__item"
                                style={{width: `${itemWidth}px`}}
                            >
                                <img className='slider__img' src={slide} alt="img" />
                            </div>
                        )
                    })}
                </div>
            </div>
            <button onClick={prevHandler} className='slider__button prev'></button>
            <button onClick={nextHandler} className='slider__button next'></button>
        </div>
    )
}

export default withResizeDetector(Slider);