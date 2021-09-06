import React from 'react';
import "./HotelDetails.css";

const HotelDetails = (props) => {
    const {title, room, facility1, facility2, rating, price, totalPrice, img} = props.hotel;

    const hotelImg = {
        backgroundImage: `url("${img}")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
    }
    return (
           <div className="d-flex">
                <div style={hotelImg} className="design">

                 </div>

                <div className="contentStyle">
                    <h6 className="pb-4">{title}</h6>
                    <p className="my-2 mx-1">{facility1}</p>
                    <p className="my-2 mx-1">{facility2}</p>
                    <div className="d-flex justify-content-between my-4">

                    <div className="d-flex">
                        <img src="https://i.ibb.co/bHBk1wG/star-1.png" className="my-2" width="16.54px" height="15.58px" alt=""/>
                        <p className="my-1 mx-1">{rating}</p>
                        <p className="my-1 mx-2">{price}</p>
                        <p className="my-1 mx-2">{totalPrice}</p>
                    </div>
               
                 </div>
                </div>
           </div>
            
    );
};

export default HotelDetails;