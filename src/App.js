import React, { createContext, useState } from 'react';
import {
   BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import Booking from './components/Booking/Booking';
import CheckOut from './components/CheckOut/CheckOut';
import HeaderNav from './components/HeaderNav/HeaderNav';
import Home from './components/Home/Home';
import HotelDetails from './components/HotelDetails/HotelDetails';
import Login from './components/Login/Login';
import Places from './components/Places/Places';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
   <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
     <Router>
       <HeaderNav></HeaderNav>
       
       <Switch>
         <Route path="/home">
            <Home></Home>
         </Route>
         <Route path="/places">
            <Places></Places>
         </Route>

         <Route path="/booking/:id">
            <Booking></Booking>
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
