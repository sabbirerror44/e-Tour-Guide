import React from 'react';
import { useHistory, useParams } from 'react-router';
import TourPlaceData from '../../TourPlaceData/TourPlaceData';
import "./Booking.css";

const Booking = () => {
    const history = useHistory();
    const {id} = useParams();
    const placeDetails = TourPlaceData.find(place=>place.id===parseInt(id));
    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`/checkout/${id}`)


    }
    return (
        <div className="background">
            <div className="container">
             <div className="row d-flex justify-content-between p-4">
                <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-xs-12 customStyle m-auto">
                      <h1 className="text-center">{placeDetails.name}</h1>
                      <p>{placeDetails.description}</p>
                </div>
                <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-xs-12 customStyle">
                   
                    <form className="form p-4" onSubmit={handleSubmit}>
                       <label htmlFor="origin">Origin</label>
                       <input type="text" class="form-control bg-light" id="origin" placeholder="Enter Your Origin..." required></input><br/>
                       <label htmlFor="origin">Destination</label>
                       <input type="text" class="form-control bg-light" id="destination" placeholder="Enter Your Destination..." required></input><br/>
                       <div class="form-row">
                            <div class="col">
                            <label htmlFor="from">From:</label>
                            <input type="date" class="form-control" id="from" placeholder="First name" required/>
                            </div>
                            <div class="col">
                            <label htmlFor="to">To:</label>
                            <input type="date" class="form-control" id="to" placeholder="Last name" required/>
                            </div>
                        </div><br/>
                            <input type="submit" class="bookingButton" value="Start Booking"/>
                    </form>
                   
                
               </div>
            </div>
            </div>

        </div>
        
    );
};

export default Booking;