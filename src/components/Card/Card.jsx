import React from 'react';
import '../Card/Card.styles.css'
export const Card = (props) => {
    return(
        <div className='card'>
            <img alt="monster" src={`https://robohash.org/3?set=set4&size=180x180`}/>
            <h3>{props.user.name}</h3>
            <p>{props.user.email}</p>
        </div>
    )
}