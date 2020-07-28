/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
/* eslint-disable eqeqeq */
/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './Basket.module.css';
import './basket.css';

class Basket extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { dFRedux } = this.props;

    // eslint-disable-next-line no-undef
    const dF = JSON.parse(localStorage.getItem('dataFilter'));
    // eslint-disable-next-line no-undef
    const maxArr = localStorage.getItem('max');
    // eslint-disable-next-line no-undef
    const valueId = JSON.parse(localStorage.getItem('valueId'));

    const dFRow = dFRedux.length === 0 ? dF : dFRedux;

    const data = [];
    // eslint-disable-next-line radix
    for (let i = 1; i <= parseInt(maxArr); i += 1) {
      data.push(i);
    }

    return (

      <div>
        <div>
          <div>Basket</div>
          <div className={classes.BasketMain}>
            <div className={classes.Item}>Item</div>
            <div className={classes.Quantity}>Quantity</div>
            <div className={classes.Price}>Price</div>
            <div className={classes.Subtotal}>Subtotal</div>
          </div>
        </div>

        {dFRow.map((element) => (
          <div key={element.key} className={classes.BasketOrg}>
            <div className={classes.MainSize}>
              size:
              {element.size}
            </div>
            <img className={classes.BasketImg} alt="" key={element.img} src={`data:image/jpeg;base64,${Buffer.from(Buffer.from(JSON.parse(JSON.stringify(element.img)).data)).toString('base64')}`} />
            <div className={classes.BasketName}>
              {element.name}
              {' '}
            </div>
            <div className={classes.BasketPrice}>
              £
              { element.price}
            </div>
            <div className={classes.SelectTotal}>
              £
              {valueId !== null ? valueId.filter((elid) => elid.id == element.key)
                .map((elvalue) => elvalue.value) * element.price
                || element.price : element.price * 1 }
            </div>

            <div className={classes.SelectQuantity}>
              <select
                onChange={(this.props.SizeChange)}
                className="custom-select select"
                id={element.key}
                value={

      valueId !== null ? valueId.filter((elid) => elid.id == element.key)
        .map((elvalue) => elvalue.value) : this.value
}
              >
                <option>Open this select menu</option>
                {element.max.map((el) => <option key={el} value={el}>{el}</option>)}
              </select>
            </div>

            <button
              type="button"
              className="close"
              aria-label="Close"
              id={classes.deleteItem}
              onClick={this.props.DeleteBasket}
            >
              <span id={element.id} alt="" key={element.size} aria-hidden="true">&times;</span>
            </button>

          </div>
        ))}
        <div className={classes.Mainbtn}>
          <button className="btn btn-secondary" type="button" id={classes.ContShopping} onClick={() => { this.props.history.push('/All'); }}>Continue Shopping</button>
          <button
            type="button"
            className="btn btn-secondary"
            id={classes.checkOut}
            onClick={() => {
              this.props.history.push({
                pathname: '/Checkout',
                state: {
                  df: dFRow.map((element) => ({
                    size: element.size,
                    name: element.name,
                    price: element.price,
                    qtd: element.max,
                    value: valueId.filter((elid) => elid.id == element.key)
                      .map((elvalue) => elvalue.value),

                  })),

                },
              });
            }}
          >
            Check Out
          </button>
        </div>

      </div>

    );
  }
}

const mapStateToProps = (state) => ({
  products: state.basket.data,
  changeQuantity: state.basket.changeSize,
  dFRedux: state.product.dataFilter,
});

const mapDispatchToProps = (dispatch) => ({
  SizeChange: (e) => dispatch({
    type: 'CHANGE_SIZE_BASKET',
    id: e.target.id,
    value: e.target.value,
  }),

  DeleteBasket: (e) => dispatch({
    type: 'DELETE_BASKET',
    basketid: e.target.id,
    basketsize: e.target.key,
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
