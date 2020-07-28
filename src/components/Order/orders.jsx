import React, { Component } from 'react';
import { connect } from 'react-redux';

// import Order from '../orders/';
import axios from 'axios';
// import withErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler';
import fetchProducts from '../../store/action';
import Spinner from '../../containers/Spinner';
import Aux from '../../containers/Aux'
import classes from './orders.module.css'

class Orders extends Component {
    state = {
       orders: [],
     loading: true,
     email: null
     }

     componentDidMount() {
      const id = {
        idCustomer: localStorage.getItem('idCustomer') 
      }
      axios({
        method: 'get',
        url: 'http://localhost:4000/id',
        params: id,
       
      }).then( response => {
        let email = response.data.email.toString()
       this.setState({email: email})
    })
    .catch( error => {
    console.log(error)
    } )

       axios.get("http://localhost:4000/data")
       .then(res => { this.setState({loading: false, orders: res.data})
    })
       .catch(function (error) {
       //  handle error
        console.log(error)
       })

       this.props.dispatch(fetchProducts());
      
     }

    render () {

      let orders = this.state.orders.filter((el)=>
      el.email_order === this.state.email)

      console.log(orders)

      console.log(this.state.email)
      console.log(this.props.products)

      if (this.props.error) {
        return (
          <div>
            Error!
            {this.props.error.message}
          </div>
        );
      }
  
      if (this.props.loading) {
        return <Spinner />;
      }

        return (
          <Aux>
            <h3 className={classes.Title}>Your Order History</h3>
<div className={classes.MainOrder}>
                {orders.length !== 0 ? orders.map((el)=>{
                  return <div className={classes.orderTable} key={el.orders_id}>
                <div className={classes.FlexElement}>
                <div className={classes.name}>Name: {el.name_product}</div>
                <div className={classes.price}>Price: {el.price_product}</div>
                <div className={classes.quantity}>Quantity: {el.quantity}</div>
                <div className={classes.size}>Size: {el.size}</div>
                    </div>
                {this.props.products.filter((element)=>{
                  return element.clotheName === el.name_product
                }).map((product)=>{
                  return  <img className={classes.image} alt="" key={product.image_id} src={`data:image/jpeg;base64,${Buffer.from(Buffer.from(JSON.parse(JSON.stringify(product.image1)).data)).toString('base64')}`} />
                })}</div>
                }): <div className={classes.NoData}>You don't have any order history</div>}
       </div>
            </Aux>
        );
    }
}

const mapStateToProps = (state) => ({
  products: state.reducer.data,
  loading: state.reducer.loading,
  error: state.reducer.error,

});

export default connect(mapStateToProps)(Orders);

// export default Orders;