import React, {Component} from 'react';
import classes from './Button.module.css';
import Aux from '../../../containers/Aux'
import Filterbtn from './Filter/Filterbtn'
import Sortbtn from './Sort/Sortbtn'
import {connect} from 'react-redux'

class  ButtonSection extends Component {
    state = {
        modalShow: false,
        modal: false
    }

    render(){

    return ( 
        <Aux>
          <div className={classes.Button}>
            <div className= {classes.Filterbtn}>
<Filterbtn  ClickOn={this.props.onChangeModal} CloseModal={this.props.closeModal} showModal ={this.props.ml}/>
</div>
<div className= {classes.Sortbtn}>
<Sortbtn   ClickModal={this.props.onChangeModalShow} ModalClose={this.props.closeModalShow} showModal ={this.props.mls}/>
          </div>
          </div>
        
      </Aux>
  
       );
    }  
  }

  const mapStateToProps = state => {
    return {
      mls : state.reducer.modalShow,
      ml : state.reducer.modal
    }
  };

  const mapDispatchToProps = dispatch => {
    return{
      onChangeModal: () => dispatch({type: 'CHANGEMODAL'}),
      onChangeModalShow: () => dispatch({type: 'CHANGEMODALSHOW'}),
      closeModalShow: () => dispatch({type: 'CLOSEMODALSHOW'}),
      closeModal: () => dispatch({type: 'CLOSEMODAL'})
    };
  };
   
  export default connect(mapStateToProps, mapDispatchToProps) (ButtonSection);
