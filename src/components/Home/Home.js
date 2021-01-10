import React, { useState } from 'react';
import TourPlaceData from "../../TourPlaceData/TourPlaceData";
import PlaceDetails from '../PlaceDetails/PlaceDetails';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import "./Home.css";
import { Link } from 'react-router-dom';
const Home = () => {

    const [selectedplace, setSelectedplace] = useState(TourPlaceData[0]);
    
        const handleClick = (id) => {
            const newPlace = TourPlaceData.find(place=> place.id===id)
            setSelectedplace(newPlace);
        }
     
    return (
        <div className="background">
             <div className="container">
                <div className="row ">
                    <div className="col-4 mt-4 d-flex align-items-center justify-content-center">
                        <div>
                        <h1 className="text-white">{selectedplace.name}</h1>
                        <p className="text-white">{selectedplace.summary}</p>
                           <Link to={`/booking/${selectedplace.id}`}> <button className="btn btn-warning button-style">Booking <FontAwesomeIcon icon={faArrowRight} /></button></Link>
                        </div>
                    </div>
                    <div className="col-8 d-flex justify-content-between">
                         {
                            TourPlaceData.map(place=> <PlaceDetails place={place} handleClick={handleClick}></PlaceDetails>)
                        }
                    </div>
                </div>
            </div>
        </div>
       
    );
};

export default Home;