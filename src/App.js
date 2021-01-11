import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import PlaceDetails from './components/PlaceDetails/PlaceDetails';
import Login from './components/Login/Login';
import CheckOut from './components/CheckOut/CheckOut';
import Booking from './components/Booking/Booking';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import HotelDetails from './components/HotelDetails/HotelDetails';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
   <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
     <Router>
       <Header></Header>
       <Switch>
         <Route path="/home">
            <Home></Home>
         </Route>
         <Route path="/booking/:id">
            <Booking></Booking>
         </Route>
         <Route path="/placeDetails">
            <PlaceDetails></PlaceDetails>
         </Route>
         <Route path="/HotelDetails">
            <HotelDetails></HotelDetails>
         </Route>
         <Route path="/login">
            <Login></Login>
         </Route>
         <PrivateRoute path="/checkout/:id">
            <CheckOut></CheckOut>
         </PrivateRoute>
        
         <Route exact path="/">
             <Home></Home>
         </Route>

       </Switch>
     </Router>
   </UserContext.Provider>
  );
}

export default App;
