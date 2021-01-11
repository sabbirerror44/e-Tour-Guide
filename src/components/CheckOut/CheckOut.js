import React from 'react';
import { useParams } from 'react-router';
import hotelData from '../../HotelData/HotelData';
import TourPlaceData from '../../TourPlaceData/TourPlaceData';
import HotelDetails from '../HotelDetails/HotelDetails';
import "./CheckOut.css";

const CheckOut = () => {
    const {id} = useParams();
    const selectedPlace = TourPlaceData.find(place => place.id === parseInt(id));
    
    return (
        <div className="container">
            <hr/>
            <p className="mb-0">252 stays Apr 13-17 3 guests</p>
            <h5 className="font-weight-bold mb-2">Stay in {selectedPlace.name}</h5>
           <div className="row">
                <div className="col-7">
                    {
                        hotelData.map(hotel=><HotelDetails hotel={hotel}></HotelDetails>)
                    }
                </div>
                <div className="col-5">
                    
                </div>
            </div> 
           
        </div>
    );
};

export default CheckOut;