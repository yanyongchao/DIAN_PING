import React, {Component} from 'react';
import HeaderComponent from '../../component/HeaderComponent';
import {connect} from 'react-redux';
import * as Actions from '../../actions/userInfo';
import {bindActionCreators} from 'redux';
import LoginComponent from '../../component/LoginComponent';

class Login extends Component {
  constructor() {
    super();
    this.state = {login: false};
  }

  render() {
    return (
      <div>
        <HeaderComponent title="登录" history={this.props.history}/>
        {/*如果未登录过显示登录组件，否则不显示直接跳转用户页面*/}
        {this.state.login?<LoginComponent login={this.login.bind(this)}/>:<div></div>  }
      </div>
    )
  }

  login(username) {
    let info = this.props.userInfo;
    info.username = username;
    // 更新redux的state
    this.props.userActions.update(info);
    // 登录成功，跳转到用户页面
    if (this.props.match.params.route) {
      this.props.history.push(`/${this.props.match.params.route}`);
    } else {
      this.props.history.push('/user');
    }
  }

  componentDidMount() {
    this.checkLogin();
  }

  checkLogin() { //检查是否登录，在redux中state.userInfo是否有username
    if (this.props.userInfo.username) {
      return this.props.history.push('/user');
    }
    this.setState({
      login: true
    });
  }
}

export default connect(
  state => {
    return {userInfo: state.userInfo}
  },
  dispatch => {
    return {
      userActions: bindActionCreators(Actions, dispatch)
    }
  }
)(Login);