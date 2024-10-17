import logements from '../../data/logements.json';
import { useParams } from 'react-router-dom';
import './Tags.scss'
import StarRating from '../Rating/Rating';

function Tags() {
    const { id } = useParams(); // Get the page id from the URL

    // Use 'find' to locate the logement with the matching ID
    const logement = logements.find(logement => logement.id === id);

    return (
        <section className="tags">
            <div className='tag'>
                {logement.tags.map((tag, index) => (
                    <p key={index}>{tag}</p>
                ))}
            </div>
            {/* Display the star rating */}
            <StarRating rating={parseInt(logement.rating)} />
        </section>
    );
}

export default Tags;
