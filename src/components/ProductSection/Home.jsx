/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Aux from '../../containers/Aux';
import fetchProducts from '../../store/action';
import classes from './Home.module.css';
import Spinner from '../../containers/Spinner';

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }

  render() {
    const { error, loading, products } = this.props;

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
        <br />
        <div className={classes.type}>
          {' '}
          <div id={classes.Desktop}>
            {`${('-').repeat(33)}Bottom${('-').repeat(33)}`}
          </div>
          <div id={classes.Mobile}>
            {`${('-').repeat(12)}Bottom${('-').repeat(12)}`}
          </div>
        </div>
        <br />

        <div className={classes.imgType}>

          {products.filter((el) => el.typ === 'Bottom').map((product) => (
            <Link
              to={{
                pathname: '/Product/:id',
                hash: `#${product.clotheName}`,
                state: {
                  detail: product,
                  search: product.image_id,
                  name: product.typ,
                },
              }}
              key={product.image_id}
            >
              <img className={classes.Image} alt="" src={`data:image/jpeg;base64,${Buffer.from(Buffer.from(JSON.parse(JSON.stringify(product.image1)).data)).toString('base64')}`} />
            </Link>
          ))}

        </div>
        <br />
        <div className={classes.type}>
          {' '}
          <div id={classes.Desktop}>
            {`${('-').repeat(33)}Dresses${('-').repeat(33)}`}
          </div>
          <div id={classes.Mobile}>
            {`${('-').repeat(12)}Dresses${('-').repeat(12)}`}
          </div>
        </div>
        <br />

        <div className={classes.imgType}>

          {products.filter((el) => el.typ === 'Dress' && el.UK12 === 0).map((product) => (
            <Link
              to={{
                pathname: '/Product/:id',
                hash: `#${product.clotheName}`,
                state: {
                  detail: product,
                  search: product.image_id,
                  name: product.typ,
                },
              }}
              key={product.image_id}
            >
              <img className={classes.Image} alt="" src={`data:image/jpeg;base64,${Buffer.from(Buffer.from(JSON.parse(JSON.stringify(product.image1)).data)).toString('base64')}`} />
            </Link>
          ))}

        </div>

        <br />
        <div className={classes.type}>
          {' '}
          <div id={classes.Desktop}>
            {`${('-').repeat(33)}Jumpsuit${('-').repeat(33)}`}
          </div>
          <div id={classes.Mobile}>
            {`${('-').repeat(12)}Jumpsuit${('-').repeat(12)}`}
          </div>
        </div>
        <br />

        <div className={classes.imgType}>

          {products.filter((el) => el.typ === 'Jumpsuit').map((product) => (
            <Link
              to={{
                pathname: '/Product/:id',
                hash: `#${product.clotheName}`,
                state: {
                  detail: product,
                  search: product.image_id,
                  name: product.typ,
                },
              }}
              key={product.image_id}
            >
              <img className={classes.Image} alt="" src={`data:image/jpeg;base64,${Buffer.from(Buffer.from(JSON.parse(JSON.stringify(product.image1)).data)).toString('base64')}`} />
            </Link>
          ))}

        </div>

      </Aux>
    );
  }
}

const mapStatetoProps = (state) => ({
  products: state.reducer.data,
  loading: state.reducer.loading,
  error: state.reducer.error,
});

export default connect(mapStatetoProps)(Home);
