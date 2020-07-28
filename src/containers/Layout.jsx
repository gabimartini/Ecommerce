import React from 'react';
import classes from './Layout.css';
import Aux from './Aux';
import Menu from '../components/Menu/Menu';
import SideDrawer from '../components/Menu/MobileComponents/SideDrawer/SideDrawer';
import {connect} from 'react-redux'

class Layout extends React.PureComponent {
  state = {
    showSideDrawer: false,
}


sideDrawerClosedHandler = () => {
    this.setState( { showSideDrawer: false } );
}

sideDrawerToggleHandler = () => {
    this.setState( ( prevState ) => {
        return { showSideDrawer: !prevState.showSideDrawer };
    } );
}

  render() {
    return (
      <Aux>
        <Menu drawerToggleClicked={this.sideDrawerToggleHandler} 
        login={this.props.name} 
        idLogin={this.props.id} 
        />

        <SideDrawer
                    menuclicked={this.sideDrawerToggleHandler}
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} />
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Aux>

    );
  }
}

const mapStatetoProps = (state) => ({
  name: state.login.name,
  id: state.login.id,
});

export default connect(mapStatetoProps)(Layout);
