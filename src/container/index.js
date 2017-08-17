import React, {Component} from 'react';
import {connect} from 'react-redux';
import RouterMap from '../routes/index';
//绑定actionCreator组成的对象
import {bindActionCreators} from 'redux';
import * as Actions from '../actions/userInfo';
class App extends Component {
  componentDidMount() {
    //localstoage名字cityName,没有附一个默认值，当前城市存放到redux
    let cityName = localStorage.getItem('cityName');
    if (cityName == null) {
      cityName = '杭州';
    };
    this.props.userActions.update({
      cityName
    });
  }
  render() {
    return (
      <div>
        <RouterMap/>
      </div>
    )
  }
}
export default connect(
  state => { //mapStateToProps
    return {};
  },
  dispatch => { //mapDispatchToProps
    return {
      userActions: bindActionCreators(Actions, dispatch)
    };
  }
)(App)