import './Gallery.scss';
import { Link } from 'react-router-dom'
import logements from '../../data/logements.json'


function Gallery() {
    return (
        <section className="gallery">
            {logements.map((logement, index) => (
                
                <Link key={"gallery-" + index} className='logementCard' to={'/logement/' + logement.id}>
                    <article className="card">
                        <img src={logement.cover} alt={logement.description} />
                        <div className='shadowHolder'></div>
                        <h2>{logement.title}</h2>
                    </article>
                </Link>

            ))}

        </section>
    );
}

export default Gallery;