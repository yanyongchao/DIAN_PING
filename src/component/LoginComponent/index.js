import React, {Component} from 'react';
import styl from './index.styl';
export default class LoginComponent extends Component {
  constructor() {
    super();
    this.state = {
      val: ''
    }
  }
  login  = () => {
    this.props.login(this.state.val);
  }
  changeValue = (event) => {
    this.setState({
      val: event.target.value
    })
  }
  render() {
    return (
      <div className={styl.loginComponent}>
        <input type="text" value={this.state.val} onChange={this.changeValue}/>
        <button onClick={this.login}>登录</button>
      </div>
    )
  }
};