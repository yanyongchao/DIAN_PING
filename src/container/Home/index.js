import React, {Component} from 'react';
import HomeHeader from '../../component/HomeHeader';
import Swiper from '../../component/Swiper';
import Ad from './subpage/Ad';
import List from './subpage/List';
import {connect} from 'react-redux';

class Home extends Component {
  render() {
    return (
      <div>
        <HomeHeader cityName={this.props.userInfo.cityName}/>
        <Swiper/>
        <Ad/>
        <List cityName={this.props.userInfo.cityName}/>
      </div>
    )
  }
}

export default connect(
  state => { //mapStateToProps
    return {userInfo: state.userInfo};
  }
)(Home);