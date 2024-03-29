import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


import Slider from "react-slick";

class MedicalFacility extends Component {

    render() {
     
        return (
            <div className='section-share medical-facility '>
            <div className='section-container'>
            <div className='section-header'>
                <span className='title-section'>Cơ sở y tế nổi bật</span>
                <button className='btn-section'>Xem thêm</button>
            </div>
            <div className='section-body'>
            <Slider {...this.props.settings}>
                    <div className='section-customize'>
                        <div className='bg-image  medical-facility'/>
                        <div>Hệ thống y tế Thu Cúc 1</div>
                    </div>                                  
                    <div className='section-customize'>
                        <img className='bg-image  medical-facility' />
                        <div>Hệ thống y tế Thu Cúc 2</div>
                    </div>                                
                    <div className='section-customize'>
                        <img className='bg-image  medical-facility' />
                        <div>Hệ thống y tế Thu Cúc 3</div>
                    </div>                                 
                    <div className='section-customize'>
                        <img className='bg-image  medical-facility' />
                        <div>Hệ thống y tế Thu Cúc 4</div>
                    </div>                               
                    <div className='section-customize'>
                        <img className='bg-image  medical-facility' />
                        <div>Hệ thống y tế Thu Cúc 5</div>
                    </div>                                 
                    <div className='section-customize'>
                        <img className='bg-image  medical-facility' />
                        <span>Hệ thống y tế Thu Cúc 6</span>
                    </div>             
                </Slider>
            </div>
            
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
