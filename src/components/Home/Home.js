import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";
const Home = () => {

    // const [selectedplace, setSelectedplace] = useState(TourPlaceData[0]);
    
    //     const handleClick = (id) => {
    //         const newPlace = TourPlaceData.find(place=> place.id===id)
    //         setSelectedplace(newPlace);
    //     }
     
    return (
        <div className="backgroundColor text-center">
             <div className="row">
                <div className="col-7 leftOverview">
                    <p className="frontText">Welcome <br/> To <br/> Bangladesh</p>
                    <div className="input-group rounded searchStyle">
                             <input type="search" class="form-control rounded" placeholder="Search Your Desired Area" aria-label="Search"
                            aria-describedby="search-addon" />
                           <div className="iconStyle">
                         <FontAwesomeIcon className="icon" icon={faSearch} />
                    </div>
                    </div>
                    <Link to='/places'><button type="button" className="btn btn-success my-4"><h5>Explore Places</h5></button></Link>
                    <p className="textTagline">Get Started On Your <br/> Vacation planning by Exploring <br/> Bangladesh</p>
                </div>
                <div className="col-5 overview">

                </div>

            </div>
        </div>
       
    );
};

export default Home;