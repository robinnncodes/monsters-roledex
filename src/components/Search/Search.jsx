import React from 'react';
import '../Search/Search.styles.css';
export const Search = ({placeholder, changeText}) => {
    return(
        <div>
            <input 
            type="search" 
            placeholder={placeholder} 
            className="search"
            onChange={changeText}></input>
        </div>
    )
}