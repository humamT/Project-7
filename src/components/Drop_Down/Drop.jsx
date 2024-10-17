import React, { useState } from 'react';
import down_arrow from '../../assets/images/vectorBas.svg'

const Drop = ({
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
        <div className='drop'>
            <div className='down_btn'>
                <p className='down_name'>{title}</p>
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

export default Drop;