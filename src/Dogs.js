// show all three dogs
import React from 'react';
import Dog from './Dog';
import './Dogs.css';


const Dogs = (props) => {
    return(
        <>
            <h1>Dogs</h1>
            <div>
                <div className="Dogs">
                    {props.dogs.map(dog => <Dog dog={dog} key={dog.name} />)}
                 </div>
            </div>
        </>
    )
}

export default Dogs;