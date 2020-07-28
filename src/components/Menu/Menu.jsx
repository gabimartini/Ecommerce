/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import classes from './Menu.module.css';
import MenuItems from './MenuItems';
import DrawerToggle from './MobileComponents/SideDrawer/DrawerToggle/DrawerToggle';
import axios from 'axios'

class Menu extends Component {

  state = {
    idName: <Link to='/Login'><svg width="1em" height="1em" viewBox="0 0 16 16" id={classes.icon} className="bi bi-person" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M13 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002.002zM3.022 13h9.956a.274.274 0 0 0 .014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 0 0 .022.004zm9.974.056v-.002.002zM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  </svg></Link>,
  }

 componentDidMount(){
          if(localStorage.getItem('idCustomer') !== null ){
             const id = {
               idCustomer: localStorage.getItem('idCustomer') 
             }
         axios({
           method: 'get',
           url: 'http://localhost:4000/id',
           params: id,
          
         }).then( response => {
           let name = response.data.name.toString()
          this.setState({idName: <p className={classes.SignOut}>Hello { name[0].toUpperCase() + name.slice(1)} <br></br>
          <a href='' onClick={this.Logout}>Not you? Sign Out</a> </p>})
       })
       .catch( error => {
     console.log(error)
       } );  
       }else{
         this.setState({idName:  <Link to="/Login"><svg width="1em" height="1em" viewBox="0 0 16 16" id={classes.icon} className="bi bi-person" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
         <path fillRule="evenodd" d="M13 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002.002zM3.022 13h9.956a.274.274 0 0 0 .014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 0 0 .022.004zm9.974.056v-.002.002zM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
       </svg></Link>})
       }
     
     }

     Logout = () => {
      localStorage.removeItem("idCustomer")
     }
render() {

let name = this.props.login

  return (

<header className={classes.Toolbar}>
    <DrawerToggle clicked={this.props.drawerToggleClicked} />
    <nav className={classes.Main_Menu} id={classes.DesktopOnly}>
      <ul>
        <Link className={classes.Home} to="/">Home</Link>
        <MenuItems>Clothes</MenuItems>
      </ul>
    </nav>
    
    <div className={classes.Utility} >
    <Link to="/Orders" className={classes.Orders} >Orders</Link>
    <div className={classes.MenuLink}>{name !== null ? 
    <p className={classes.SignOut}>Hello { name[0].toUpperCase() + name.slice(1)} <br></br>
    <a href='' onClick={this.Logout}>Not you? Sign Out</a> </p>
     : this.state.idName }</div>
    <Link to="Basket" className={classes.Basket} >
      <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-bag" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M14 5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5zM1 4v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4H1z" />
        <path d="M8 1.5A2.5 2.5 0 0 0 5.5 4h-1a3.5 3.5 0 1 1 7 0h-1A2.5 2.5 0 0 0 8 1.5z" />
      </svg>
    </Link>
    </div>
    
  </header>


  )
}
} 

export default Menu;
