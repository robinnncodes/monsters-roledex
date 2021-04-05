import React from 'react';
import {Card} from '../Card/Card'
import './CardList.styles.css'
export const CardList = (props) => {
    return(
        <div className="card-list">
            {props.names.map(person => (
                <Card user={person} key={person.id}/>
            ))}
        </div>
    )
}

//Card ---> key=name.id     name=person.name