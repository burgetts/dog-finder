import React from 'react';
import { useParams } from 'react-router-dom';
import './DogDetails.css'

const DogDetails = ({dogs}) => {
    const { name } = useParams()
    const dog = dogs.filter(dog => dog.name.toLowerCase() === name)[0]
    
    return (
        <div className="DogDetails">
            <h1>{dog.name}</h1>
            <img src={dog.src} alt="dog"></img>
            <p> Age: {dog.age} </p>
            <ul className="DogDetails-facts"> Fun Facts
                {dog.facts.map((fact, idx) => <li key={idx}>{fact}</li>)}
            </ul>
        </div>
    )
}

export default DogDetails;