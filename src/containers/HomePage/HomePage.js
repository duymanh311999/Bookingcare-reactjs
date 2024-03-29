import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import SpecialtySlider from './Section/SpecialtySlider';
import MedicalFacility from './Section/MedicalFacility';
import OutstandingDotor from './Section/OutstandingDotor';
import HandBook from './Section/HandBook';
import About from './Section/About';
import HomeFooter from './HomeFooter';

import './HomeHeader.scss';
import './Homepage.scss'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


class HomePage extends Component {

    render() {
        let settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1 ,
        }
        return (
            <div>
                <HomeHeader isShowBanner={true}/>
                <SpecialtySlider 
                settings={settings}                 
                />
                <MedicalFacility
                settings={settings}
                />
                <OutstandingDotor
                settings={settings}
                />
                <HandBook
                 settings={settings}
                />
                <About />
                <HomeFooter />
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
