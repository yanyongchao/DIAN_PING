import React, {Component} from 'react';
import HeaderComponent from '../../component/HeaderComponent';
import Info from './subpage/Info';
import Comment from './subpage/Comment';
export default class Detail extends Component {
  render() {
    return (
      <div>
        {/*头部*/}
        <HeaderComponent title="商户详情" history={this.props.history}/>
        <Info id={this.props.match.params.id}/>
        <Comment id={this.props.match.params.id}/>
        {/*商户信息*/}
        {/*购买和收藏*/}
        {/*评论*/}
      </div>
    )
  }
};