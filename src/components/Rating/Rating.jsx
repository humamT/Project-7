import filledStar from '../../assets/images/star-rate.svg'; // Path to your filled star SVG
import emptyStar from '../../assets/images/emptyStar.svg';   // Path to your empty star SVG
import './Rating.scss';

function StarRating({ rating }) {
    const totalStars = 5; // Total number of stars

    return (
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
    );
}

export default StarRating;
