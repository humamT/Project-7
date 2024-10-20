import filledStar from '../../assets/images/star-rate.svg'; // Path to your filled star SVG
import emptyStar from '../../assets/images/emptyStar.svg';   // Path to your empty star SVG
import './Rating.scss';
import { useParams } from 'react-router-dom';
import logements from '../../data/logements.json';

function StarRating({ rating }) {
    const totalStars = 5; // Total number of stars

    const { id } = useParams(); // Get the page id from the URL
    const logement = logements.find(logement => logement.id === id);

    return (
        <div className='stars_host'>
            <div className="star-rating">
                {[...Array(totalStars)].map((star, index) => {
                    return (
                        <img
                            key={index}
                            src={index < rating ? filledStar : emptyStar}
                            alt={index < rating ? "Filled Star" : "Empty Star"}
                            className="star-icon"
                        />
                    );
                })}
            </div>
            <div className='host host_mobile'>
                <p className='host_name'>{logement.host.name}</p>
                <img className='host_pic' src={logement.host.picture} alt={logement.host.name} />
            </div>
        </div>
    );
}

export default StarRating;
