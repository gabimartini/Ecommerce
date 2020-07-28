/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classes from './data.module.css';
import Aux from '../../containers/Aux';
import ButtonSection from './Button_Filter_Sort/Button';
import fetchProducts from '../../store/action';
import Spinner from '../../containers/Spinner';

class Data extends Component {
  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }

  render() {
    const { error, loading, products } = this.props;
    const { type } = this.props.location.state;

    if (error) {
      return (
        <div>
          Error!
          {error.message}
        </div>
      );
    }

    if (loading) {
      return <Spinner />;
    }

    return (
      <Aux>
        <h3 className={classes.Title}>{type === 'All' ? 'Our Product' : type}</h3>
        <ButtonSection />

        <div className={classes.MainData}>

          {(type !== 'All' ? products.filter((objeto) => type === objeto.typ) : products)
            .map((product) => (
              <div className={classes.MainMapData} key={product.image_id}>
                <ul>
                  <Link to={{
                    pathname: '/Product/:id',
                    hash: `#${product.clotheName}`,
                    state: {
                      detail: product,
                      search: product.image_id,
                      name: product.typ,
                    },
                  }}
                  >
                    <img className={classes.Image} alt="" key={product.image_id} src={`data:image/jpeg;base64,${Buffer.from(Buffer.from(JSON.parse(JSON.stringify(product.image1)).data)).toString('base64')}`} />
                  </Link>
                  <li>{ product.clotheName}</li>
                  <li>
                    £
                    {product.price}
                  </li>
                </ul>
              </div>
            ))}
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

export default connect(mapStateToProps)(Data);
