import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class About extends Component {
    
    render() { 
        
        return (
           <div className='section-share section-about '>
               <div className='section-about-header'>
                    Truyền thông nói về BookingCare
               </div>
               <div className='section-about-content'>
                    <div className='content-left'>
                        <iframe width="100%%" height="400" 
                            src="https://www.youtube.com/embed/bWJHjD4YU4k" 
                            title="Làm sao để cải thiện UI/UX cho Developer ?" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowFullScreen>
                        </iframe>
                    </div>
                    <div className='content-right'>
                        <p>
                        Giảm 50% phí khám ban đầu cho khách Nhi và 30% phí các dịch vụ cận lâm sàng phát sinh (không áp dụng với dịch vụ Virus test nhanh [Adeno/Rota Virus], Adenovirus Real-time
                        PCR và các xét nghiệm Covid-19)
                        Áp dụng hóa đơn các dịch vụ cho khách Nhi từ 16 tuổi trở xuống
                        Miễn phí khám Răng hàm mặt cho trẻ em dưới 16 tuổi (trị giá 150.000đ),nhổ răng sữa
                        (trị giá 65.000đ)
                        Giảm 40% dịch vụ hút mũi cho trẻ (Phương pháp Proetz).
                        </p>
                    </div>
               </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
