import './Apartement_info.scss';
import logements from '../../data/logements.json';
import { useParams } from 'react-router-dom';
import Tags from '../Tags/Tags';
import Desc_equip from '../Desc_equip/Desc_equip';


function Apart_info() {
    const { id } = useParams(); // Get the page id from the URL
    
    // Use 'find' to locate the logement with the matching ID
    const logement = logements.find(logement => logement.id === id);

    return (
        <section className="apart_info">
            <div className='info'>
                <div className='title_location'>
                    <p className='title'>{logement.title}</p>
                    <p className='location'>{logement.location}</p>
                </div>
                <div className='host'>
                    <p className='host_name'>{logement.host.name}</p>
                    <img className='host_pic' src={logement.host.picture} alt={logement.host.name} />
                </div>
            </div>
            <Tags/>
            <Desc_equip/>
        </section>
    );
}

export default Apart_info;