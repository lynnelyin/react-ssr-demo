import React, {Fragment, Component} from  'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {login, logout} from './store/actions';

class Header extends Component {
  render() {
    const {login, handleLogin, handleLogout} = this.props;
    return (
      <div>
        <Link to='/'>首页</Link>
        <br />
        {
          login ? <Fragment>
            <Link to='/logout'>翻译列表</Link>
            <br />
            <div onClick={handleLogout}>退出</div>
          </Fragment> : <div onClick={handleLogin}>登陆</div>
        }
      </div>
    )
  }
}

const mapState = (state) => ({
  login: state.header.login
});

const mapDispatch = (dispatch) => ({
  handleLogin() {
    dispatch(login());
  },
  handleLogout() {
    dispatch(logout());
  }
})

export default connect(mapState, mapDispatch)(Header);