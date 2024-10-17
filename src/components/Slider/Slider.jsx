import './Slider.scss'
import LeftArow from '../../assets/images/vector-left.svg'
import RightArow from '../../assets/images/vector-right.svg'
import { useState } from 'react'

function Slider({ logement }) {

    const [index, setIndex] = useState(0)

    const nextHandler = () => {
        if (index === logement.pictures.length - 1) {
            setIndex(0)
        } else {
            setIndex(index + 1)
        }
    }

    const prevHandler = () => {
        if (index === 0) {
            setIndex(logement.pictures.length - 1)
        } else {
            setIndex(index - 1)
        }
    }

    return (
        <section className="slider">
            <div className='bannerSlider'>
                <button className='arrow left' onClick={prevHandler}>
                    <img src={LeftArow} alt="left arrow" />
                </button>

                <img className='bannerImg' src={logement.pictures[index]} alt="Banner image" />

                <p>{index + 1}/{logement.pictures.length}</p>

                <button className='arrow right' onClick={nextHandler}>
                    <img src={RightArow} alt="right arrow" />
                </button>
                <div className='counter'> </div>

            </div>
        </section>
    )
}
export default Slider;