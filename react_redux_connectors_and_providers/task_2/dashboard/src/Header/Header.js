import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/Holberton_Logo.jpg';
import AppContext from '../App/AppContext';
import { ConnectionTimeoutError } from 'redis'; 
import { connect } from 'react-redux';


class Header extends Component {
  static contextType = AppContext;
  render () {
    const { user, logOut } = this.context; 

    return (
      <header className={css(styles.header)}>
        <div className={css(styles.logoContainer)}>
          <img src={logo} className={css(styles.logo)} alt="logo" />
          <h1 className={css(styles.headerTitle)}>School dashboard</h1>
        </div>
        {user.isLoggedIn && (
          <div id="logoutSection" className={css(styles.logoutSection)}>
            <span>Welcome {user.email} (<a href="#" onClick={logOut}>logout</a>)</span>
          </div>
        )}
      </header>
    );
  }
};

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    borderBottom: '4px solid #e0003c',
    justifyContent: 'space-between',
    height: '230px',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    width: '200px',
  },
  headerTitle: {
    display: 'flex',
    alignItems: 'center',
    color: '#e0003c',
  },
  logoutSection: {
    display: 'flex',
    alignItems: 'center',
    color: '#e0003c',
  },
  
});

const mapStateToProps = (state) => ({
  user: state.get('user') || { isLoggedIn: false, email: '' },
});

const mapDispatchToProps = {
  logout,
};

export {Header};

export default connect(mapStateToProps,mapDispatchToProps)(Header);