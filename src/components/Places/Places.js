import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TourPlaceData from '../../TourPlaceData/TourPlaceData';
import './Places.css';

const Places = () => {
    return (
        <div container>
            <div className="row container m-4">
            {
               TourPlaceData.map(place=> 
                <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-12">
                    <Card className='mx-4'>
                        <Link to={`/booking/${place.id}`}><Card.Img variant="top" src={place.img} /></Link>
                    <Card.Body>
                         <Card.Title className="title">{place.name}</Card.Title>
                         <p>{place.summary}</p>
                         <Link to={`/booking/${place.id}`}><button type="button" className="btn btn-success my-4">See More</button></Link>
                    </Card.Body>
                </Card>
                </div>

                )
            }
            

            </div>

        </div>
    );
};

export default Places;