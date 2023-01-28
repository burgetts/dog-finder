import React from 'react';
import { Link } from 'react-router-dom';
import './Dog.css'

const Dog = ({dog}) => {
    return (
      <div className="Dog">
        <img src={dog.src} alt = "dog" />
        <div className="Dog-name"> <Link to={dog.name.toLowerCase()}> {dog.name} </Link> </div>
      </div>
    )
}

export default Dog;