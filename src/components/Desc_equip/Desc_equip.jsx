import logements from '../../data/logements.json';
import { useParams } from 'react-router-dom';
import './Desc_equip.scss'
import React, { useState } from 'react';
import down_arrow from '../../assets/images/vectorBas.svg'

function Desc_equip() {
    const { id } = useParams(); // Get the page id from the URL

    // Use 'find' to locate the logement with the matching ID
    const logement = logements.find(logement => logement.id === id);

    const Drop_Desc_equip = ({
        title,
        description,
        equipments,
        index
    }) => {
        const [open, setOpen] = useState(false)
        const toggleDropdown = () => {
            setOpen(!open)
        }
        return (
            <div className='drop_Desc_equip'>
                <div className='Desc_equip_down_btn'>
                    <p className='Desc_equip_down_name'>{title}</p>
                    <button onClick={toggleDropdown} className={open ? 'rotated' : ''}>
                        <img src={down_arrow} alt="" />
                    </button>
                </div>

                <div className={`drop_menu ${open ? 'open' : ''}`}>
                    <p>{description}</p>
                </div>

            </div>
        )
    }

    return (
        <section className="Desc_equip">
            {/* Use the Drop component for description and equipments */}
            <Drop_Desc_equip

                title='Description'

                key={'description'}
                description={logement.description}
                index={0}
            />
            <Drop_Desc_equip

                title='Équipements'

                key={'equipments'}
                description={logement.equipments.map((equipments, index) => (
                    <span key={index}>{equipments}</span>
                ))}
                index={1}


            />
        </section>
    );
}

export default Desc_equip;
