import React, { Component} from 'react';
import Aux from '../../containers/Aux'
import {connect} from 'react-redux'
import classes from './modalProduct.module.css';
import fetchProducts from '../../store/action'


class Product extends Component {
  state = {
    id : this.props.location.state.detail.image1,
    size: false,
    message: '',
    class: classes.none
  }

  componentDidMount() {
    this.props.dispatch(fetchProducts()) }
     
  handleSize1 = () => {
    this.props.dispatch({type: 'SIZE1'})
    this.setState({size: true})
  }

  handleSize2 =() => {
    this.props.dispatch({type: 'SIZE2'})
    this.setState({size: true})
  }

  handleSize4 =() => {
    this.props.dispatch({type: 'SIZE4'})
    this.setState({size: true})
  }

  handleSize6 =() => {
    this.props.dispatch({type: 'SIZE6'})
    this.setState({size: true})
  }

  handleSize8 =() => {
    this.props.dispatch({type: 'SIZE8'})
    this.setState({size: true})
  }

  handleSize10 =() => {
    this.props.dispatch({type: 'SIZE10'})
    this.setState({size: true})
  }

  handleSize12 =() => {
    this.props.dispatch({type: 'SIZE12'})
    this.setState({size: true})
  }

  handleBuy =(e) => {
    if(this.state.size === false){
      this.setState({message: 'Choose one size',
      class: classes.alertDanger})
    }else{
      this.setState({size: false})
      this.props.dispatch({type: 'BUY',
        idbasket: e.target.accessKey
    },
              
      this.props.history.push("/Basket")
      )
   }
 }

  NextModal = () => {
   if(this.state.id === this.props.location.state.detail.image1 ){
      this.setState({id: this.props.location.state.detail.image2});
    }
    else if(this.state.id === this.props.location.state.detail.image2 ){
       this.setState({id: this.props.location.state.detail.image3});
    }
    else if(this.state.id === this.props.location.state.detail.image3 ){
       this.setState({id: this.props.location.state.detail.image4});
    }
    else if(this.state.id === this.props.location.state.detail.image4 ){
      if(this.props.location.state.detail.image5 === null){
        this.setState({id: this.props.location.state.detail.image1});
    }else{
        this.setState({id: this.props.location.state.detail.image5});
      }
     }
    else{
         this.setState({id: this.props.location.state.detail.image1});
       }
     }

    BackModal = () => {
        if(this.state.id === this.props.location.state.detail.image1 ){
          if(this.props.location.state.detail.image5 === null){
            this.setState({id: this.props.location.state.detail.image4});
          }else{
            this.setState({id: this.props.location.state.detail.image5});
          }

        }else if(this.state.id === this.props.location.state.detail.image5 ){
          this.setState({id: this.props.location.state.detail.image4});
        }else if(this.state.id === this.props.location.state.detail.image4 ){
          this.setState({id: this.props.location.state.detail.image3});
        }else if(this.state.id === this.props.location.state.detail.image3 ){
          this.setState({id: this.props.location.state.detail.image2});
        }else{
            this.setState({id: this.props.location.state.detail.image1});
        }
      }


  
  render() { 
    const {  products } = this.props;

   let id = this.props.location.state.search

      let modalImage = products.filter(function (objeto) { 
          return id === objeto.image_id
      });

      let type = this.props.location.state.name
 

 let img = []

 img = img.concat(modalImage)

 let storage = []
 
 let arrStorage =[]


 let viewArr =[]


 let getL = localStorage.getItem('view');

 if(getL === null){
  localStorage.setItem('view', id);
  arrStorage = id
 }else{
  storage = getL.concat(id)
  let SetSotage = [ ...new Set( storage ) ]
  arrStorage = SetSotage.filter(function (objeto) { 
    return ',' !== objeto 
  });
  localStorage.setItem('view', arrStorage)
  viewArr = arrStorage.filter(function (objeto) { 
    return id.toString() !== objeto 
  });

 }


    return ( 
        <Aux>
     
                <div 
                  className={classes.ModalProduct}
                   >
                     
                    { img.map((product) => {
                    
                    return <div className={classes.ModalMapData} key= {product.image_id}>
                  
                  
                    <div className={classes.NameModal}>{ product.clotheName}</div> 
                    <img className={classes.ImageModal} alt="" src={`data:image/jpeg;base64,${Buffer.from(Buffer.from(JSON.parse(JSON.stringify(this.state.id)).data)).toString('base64')}`}></img> 
                    <div className={classes.btndiv}>
                    <button onClick={this.BackModal} className={classes.BackModal} accessKey={product.image1}></button>
                    <button onClick={this.NextModal} className={classes.NextModal}></button>
                    </div>
                    <div className={classes.PriceModal}>£{ product.price}</div> 
                    <div className={classes.DescripModal}><p>{product.descrip}</p></div> 
                    <div className={classes.SizeModal}>Size:
                    <div className={classes.SizeModalbtn}>
                    {product.UK1 > 0 ? <button className = 'btn btn-outline-secondary' id={classes.btnSize} onClick={this.handleSize1}>1</button> : null}
                    {product.UK2 > 0 ? <button className = 'btn btn-outline-secondary' id={classes.btnSize} onClick={this.handleSize2}>2</button> : null}
                    {product.UK4 > 0 ? <button className = 'btn btn-outline-secondary' id={classes.btnSize} onClick={this.handleSize4}>4</button> : null}
                    {product.UK6 > 0 ? <button className = 'btn btn-outline-secondary' id={classes.btnSize} onClick={this.handleSize6}>6</button> : null}
                    {product.UK8 > 0 ? <button className = 'btn btn-outline-secondary' id={classes.btnSize} onClick={this.handleSize8}>8 </button> : null}
                    {product.UK10 > 0 ? <button className = 'btn btn-outline-secondary' id={classes.btnSize} onClick={this.handleSize10}>10</button> : null}
                    {product.UK12 > 0 ? <button className = 'btn btn-outline-secondary' id={classes.btnSize} onClick={this.handleSize12}>12</button> : null}
                     
                    </div>
                    
                    </div> 
                    
                               <button onClick={this.handleBuy}className='btn btn-secondary' id={classes.buy} 
                    accessKey= {product.image_id} >Add to Bascket</button>
                 
<div className={classes.erro}>
          <p className={this.state.class} id={classes.alert} role="alert">{this.state.message}</p>
          </div> 
                
                 
                             
                    </div>
                 
              }) } 

<div className={classes.loveModalMain}>
<p>Your may also love: </p>
                  <div className={classes.loveModal}>
                {products.filter(function (objeto) { 
                    return type.indexOf(objeto.typ.toString()) !== -1 && objeto.image_id !== id
  })
   .map((product) => {
    return <div key= {product.image_id} className={classes.loveModalImg}>
    
         <img className={classes.ImageModalLove} alt=""  key= {product.image_id}
    src={`data:image/jpeg;base64,${Buffer.from(Buffer.from(JSON.parse(JSON.stringify(product.image1)).data))
      .toString('base64')}` }></img>
      <div className={classes.NameModalLove}>{ product.clotheName}</div> 
      <div className={classes.PriceModalLove}>£{ product.price}</div> 
       </div> 
})
}  
</div> 
</div>


                <div className={classes.viewsModalMain}>
                <p>Your recent views: </p>
                  <div className={classes.viewsModal}>
           
                {products.filter(function (objeto) { 
                    return viewArr.indexOf(objeto.image_id.toString()) !== -1
                    
  }) 
  
   .map((product) => {

    return <div key= {product.image_id} className={classes.viewsModalImg}>
         <img className={classes.ImageModalView} alt=""  key= {product.image_id}
    src={`data:image/jpeg;base64,${Buffer.from(Buffer.from(JSON.parse(JSON.stringify(product.image1)).data))
      .toString('base64')}` }></img>
      <div className={classes.NameModalView}>{ product.clotheName}</div> 
      <div className={classes.PriceModalView}>£{ product.price}</div> 
       </div> 
})
}  
</div>

</div>
                </div>
            </Aux>
     );
  }
}

const mapStateToProps = state => ({
    products : state.reducer.data,
      });
    
      
      export default connect(mapStateToProps ) (Product); 