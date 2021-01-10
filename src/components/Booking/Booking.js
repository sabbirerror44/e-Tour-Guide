import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import TourPlaceData from '../../TourPlaceData/TourPlaceData';
import "./Booking.css";

const Booking = () => {
    const {id} = useParams();
    const placeDetails = TourPlaceData.find(place=>place.id===parseInt(id));
    console.log(placeDetails);
    return (
        <div className="background">
            <div className="container">
             <div className="row d-flex justify-content-between">
                <div className="col-5 customStyle">
                      <h1 className="text-center text-white">{placeDetails.name}</h1>
                      <p className="text-white">{placeDetails.description}</p>
                </div>
                <div className="col-5 customStyle">
                    <div className="form p-4">
                       <label htmlFor="origin">Origin</label>
                       <input type="text" class="form-control bg-light" id="origin" placeholder="Enter Your Origin..."></input><br/>
                       <label htmlFor="origin">Destination</label>
                       <input type="text" class="form-control bg-light" id="destination" placeholder="Enter Your Destination..."></input><br/>
                       <div class="form-row">
                            <div class="col">
                            <label htmlFor="from">From:</label>
                            <input type="date" class="form-control" id="from" placeholder="First name"/>
                            </div>
                            <div class="col">
                            <label htmlFor="to">To:</label>
                            <input type="date" class="form-control" id="to" placeholder="Last name"/>
                            </div>
                        </div><br/>
                             <Link to="/login" className="text-decoration-none"><button type="button" class="btn btn-warning btn-lg btn-block">Start Booking</button></Link>
                    </div>
                
               </div>
            </div>
            </div>

        </div>
        
    );
};

export default Booking;