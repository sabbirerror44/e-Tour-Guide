import React from 'react';
import "./PlaceDetails.css";

const PlaceDetails = (props) => {
    const {id, img, name} = props.place;
    const {handleClick} = props;

    const design={
        backgroundImage: `url("${img}")`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
    }
    return (
        <div className="style" style={design} onClick={()=>handleClick(id)}>
            <h4 className="text-style text-center text-white">{name}</h4> 
        </div>
    );
};

export default PlaceDetails;