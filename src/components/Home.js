import React from "react";
import { Redirect, withRouter } from "react-router-dom";
import Navbar from './Navbar';
import LandingPageImage from './LandingPageImage';
import StockCards from './StockCards';

const Home = props => {
  return (
    <div>
    <LandingPageImage/>

    </div>
  );
};

export default withRouter(Home);
