import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './index.css';
import Layout from './containers/Layout';
import Home from './components/ProductSection/Home';
import Data from './components/ProductSection/Data';
import Basket from './components/Basket/Basket';
import Checkout from './components/Checkout/Checkout';
import Product from './components/ProductSection/Product';
import Orders from './components/Order/orders';
import Login from './components/Register/Login/Login'
import Register from './components/Register/register'

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Product/:id" component={Product} />
            <Route path="/All" component={Data} />
            <Route path="/Top" component={Data} />
            <Route path="/Bottom" component={Data} />
            <Route path="/Dress" component={Data} />
            <Route path="/Jumpsuit" component={Data} />
            <Route path="/Basket" component={Basket} />
            <Route path="/Checkout" component={Checkout} />
            <Route path="/Orders" component={Orders} />
            <Route path="/Register" component={Register} />
            <Route path="/Login" component={Login} />
          </Switch>
        </Layout>

      </div>
    );
  }
}

export default App;
