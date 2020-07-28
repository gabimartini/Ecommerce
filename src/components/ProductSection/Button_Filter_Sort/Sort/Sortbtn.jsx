/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import classes from '../Button.module.css';
import Modal from '../../Modal';
import Aux from '../../../../containers/Aux';
import ButtonMain from '../ButtonMain';

class Sortbtn extends React.PureComponent {
  render() {
    return (
      <Aux>
        <ButtonMain ClickOpen={this.props.ClickModal}>Sort</ButtonMain>
        <div className={classes.ModalSort}>
        <Modal show={this.props.showModal} close={this.props.ModalClose} >
        
        
          <div className={classes.RefineOptions}>
            <ul>
              <li><button type="button" onClick={this.props.handleChangeBest}>Best Selling</button></li>
              <li><button type="button" onClick={this.props.handleChangeA}>Alphabetically, A-Z</button></li>
              <li><button type="button" onClick={this.props.handleChangeZ}>Alphabetically, Z-A</button></li>
              <li><button type="button" onClick={this.props.handleChangeLow}> Price, low to high</button></li>
              <li><button type="button" onClick={this.props.handleChangeHight}> Price, high to low</button></li>
            </ul>
          </div>
        </Modal>
        </div>
      </Aux>

    );
  }
}

const mapStateToProps = (state) => ({
  products: state.reducer.data,

});

const mapDispatchToProps = (dispatch) => ({
  handleChangeBest: () => dispatch({ type: 'IS_BEST_SELLING' }),
  handleChangeA: () => dispatch({ type: 'IS_A_Z' }),
  handleChangeZ: () => dispatch({ type: 'IS_Z_A' }),
  handleChangeLow: () => dispatch({ type: 'IS_LOW' }),
  handleChangeHight: () => dispatch({ type: 'IS_HEIGHT' }),

});

export default connect(mapStateToProps, mapDispatchToProps)(Sortbtn);
