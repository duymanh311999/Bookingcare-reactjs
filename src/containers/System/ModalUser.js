import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {emitter} from '../../utils/emitter'

class ModalUser extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
        }
        this.linstenToEmitter();
    }
    linstenToEmitter() {
        emitter.on('EVENT_CLEAR_MODAL_DATA', () => {
            this.setState({
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                address: '',
            })
        })
    }

    componentDidMount() {
        
    }

    toggle = () => {    
      this.props.toggleFormParent();
    }

    handleOnChageInput = (event, id) => {
        let copyState = {...this.state};
        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        })
    }

    checkValideInput = () => {
        let isValid = true;
        let arrInput = ['email', 'password', 'firstName', 'lastName', 'address']
        for ( let i = 0 ; i < arrInput.length; i++){
            console.log('check inside loop', this.state[arrInput[i]], arrInput[i])
            if(!this.state[arrInput[i]]){
                isValid = false;
                alert('missing parameter: '+arrInput[i]);
                break;
            }
        }
        return isValid;
    }

    handleAddNewUser = () => {
        let isValid = this.checkValideInput();
        if(isValid === true) {
            //call aip create modal
            this.props.createNewuser(this.state)
        }
    }


    render() {
        return (
            <>
                <Modal 
                isOpen={this.props.isOpen} 
                toggle={() =>{this.toggle()}} 
                className={'modal-user-container'}
                centered
                size="lg"
                >
                    <ModalHeader toggle={() =>{this.toggle()}}>Create a new user</ModalHeader>
                    <ModalBody>
                        <div className='modal-user-body'>
                                <div className='input-container'>
                                    <label>Email</label>
                                        <input 
                                        type='text' 
                                        onChange={(event) => {this.handleOnChageInput(event, "email")}}
                                        value={this.state.email}    
                                        />
                                </div>
                                <div className='input-container'>
                                    <label>Password</label>
                                        <input 
                                        type='password' 
                                        onChange={(event) => {this.handleOnChageInput(event, "password")}}
                                        value={this.state.password}    
                                        />
                                </div>
                                <div className='input-container'>
                                    <label>First name</label>
                                        <input 
                                        type='text' 
                                        onChange={(event) => {this.handleOnChageInput(event, "firstName")}} 
                                        value={this.state.firstName} 
                                        />
                                </div>
                                <div className='input-container'>
                                    <label>Last name</label>
                                        <input 
                                        type='text' 
                                        onChange={(event) => {this.handleOnChageInput(event, "lastName")}} 
                                        value={this.state.lastName}     
                                        />
                                </div>
                                <div className='input-container max-width-input'>
                                    <label>Address</label>
                                        <input 
                                        type='text' 
                                        onChange={(event) => {this.handleOnChageInput(event, "address")}} 
                                        value={this.state.address}     
                                        />
                                </div>
                        </div>                  
                           
                    </ModalBody>
                    <ModalFooter>
                    <Button 
                    className='px-3' 
                    color="primary" 
                    onClick={() =>{this.handleAddNewUser()}}>
                        Add new
                    </Button>{' '}
                    <Button 
                    className='px-3' 
                    color="secondary" 
                    onClick={() =>{this.toggle()}}>
                        Close
                    </Button>
                    </ModalFooter>
                    </Modal>
            </>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);





