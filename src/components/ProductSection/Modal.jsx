/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import classes from './Modal.module.css';
import Aux from '../../containers/Aux';

class Modal extends React.PureComponent {
  render() {
    return (
      <Aux>

        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0',
          }}
        >
          <button type="button" className={classes.Modalbtn} onClick={this.props.close}>X</button>
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;
