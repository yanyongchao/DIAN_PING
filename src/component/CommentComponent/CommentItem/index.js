import React, {Component} from 'react';
import Star from '../../Star';
import styl from './index.styl';

export default class CommentItem extends Component {
  render() {
    let {username, comment, star} = this.props.data;
    return (
      <div className={styl.commentItem}>
        <div>
          <i className="ion-person"></i>
          <span>{username}</span>
        </div>
        <Star count={star}/>
        <div>{comment}</div>
      </div>
    )
  }
};