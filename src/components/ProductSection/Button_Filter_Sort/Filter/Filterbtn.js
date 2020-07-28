/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import classes from '../Button.module.css';
import Modal from '../../Modal';
import Aux from '../../../../containers/Aux';
import ButtonMain from '../ButtonMain';

class Filterbtn extends React.PureComponent {
  render() {
    return (
      <Aux>

        <ButtonMain ClickOpen={this.props.ClickOn}>Filter</ButtonMain>

        <Modal show={this.props.showModal} close={this.props.CloseModal}>
          <div className={classes.FilterOptions}>

            <label key="cotton" className={classes.itemsFilter} value="cotton">
              {' '}
              cotton &nbsp;
              <input name="cotton" checked={this.props.ic} type="checkbox" onChange={this.props.cottonChange} />
            </label>
            <label key="viscose" className={classes.itemsFilter}>
              {' '}
              vicose &nbsp;

              <input name="viscose" checked={this.props.iv} type="checkbox" onChange={this.props.viscoseChange} />
            </label>
            <label key="Natural Dying" className={classes.itemsFilter}>
              {' '}
              Natural Dying &nbsp;

              <input name="Natural Dying" checked={this.props.in} type="checkbox" onChange={this.props.naturalChange} />
            </label>
            <label key="Embroidery" className={classes.itemsFilter}>
              {' '}
              Embroidery &nbsp;

              <input name="Embroidery" checked={this.props.ie} type="checkbox" onChange={this.props.embroideryChange} />
            </label>
            <label key="Pattern" className={classes.itemsFilter}>
              {' '}
              Pattern &nbsp;

              <input name="Pattern" checked={this.props.ip} type="checkbox" onChange={this.props.patternChange} />
            </label>

          </div>

        </Modal>

      </Aux>

    );
  }
}

const mapStateToProps = (state) => ({
  ic: state.reducer.iscotton,
  iv: state.reducer.isviscose,
  ie: state.reducer.isembroidery,
  in: state.reducer.isnatural,
  ip: state.reducer.ispattern,

});

const mapDispatchToProps = (dispatch) => ({
  cottonChange: () => dispatch({
    type: 'COTTON',
    item: 'cotton',

  }),
  viscoseChange: () => dispatch({
    type: 'VISCOSE',
    item: 'viscose',
  }),
  naturalChange: () => dispatch({
    type: 'NATURAL',
    item: 'natural',
  }),
  embroideryChange: () => dispatch({
    type: 'EMBROIDERY',
    item: 'embroidery',
  }),
  patternChange: () => dispatch({
    type: 'PATTERN',
    item: 'pattern',
  }),

});

export default connect(mapStateToProps, mapDispatchToProps)(Filterbtn);
