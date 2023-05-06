import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class HomeFooter extends Component {
    
    render() { 
        
        return (
           <div className='home-footer'>
                <p>&copy;2023 BookingCare. <a target='_blank' href='https://github.com/duymanh311999'>More information, please visit my website</a></p>
           </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
    };
};

const mapDispatchToProps = dispatch => {
    return {
       
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
