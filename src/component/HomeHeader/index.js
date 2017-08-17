import React, {Component} from 'react';
import homeHeaderStyl from './homeHeader.styl';
import {Link} from 'react-router-dom';
// 主页头部组件

export default class HomeHeader extends Component {
  render() {
    return (
      <div className={homeHeaderStyl.homeHeader}>
        <div className={homeHeaderStyl.city}>
          {this.props.cityName}
          <i className="iconfont icon-xiangxiazhankai"></i>
        </div>
        <div className={homeHeaderStyl.search}>
          <i className="iconfont icon-sousuo"></i>
          <input type="text"/>
        </div>
        <Link to="/login">
          <div className={homeHeaderStyl.profile}>
            <i className="iconfont icon-yonghu"></i>
          </div>
        </Link>
      </div>
    )
  }
};

