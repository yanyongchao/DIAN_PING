import React, {Component} from 'react';
import styl from './index.styl';
// 通过路由渲染的组件都会在props上增加很多属性
export default class HeaderComponent extends Component {
  goBack = () => {
    this.props.history.go(-1);
  }
  render() {
    console.log(this.props); //null
    return (
      <div>
        <div className={styl.header}>
          <i className="ion-ios-arrow-back" onClick={this.goBack}></i>
          <h2>{this.props.title}</h2>
        </div>
      </div>
    )
  }
};