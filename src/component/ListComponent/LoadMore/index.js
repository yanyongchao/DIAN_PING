import React, {Component} from 'react';
import styl from './index.styl';
export default class LoadMore extends Component {
  loadMore = () => {
    if (!this.props.isLoading) {
      this.props.loadMore(); // 调用父亲传递过来的加载更多函数
    }
  }
  componentDidMount() {
    this.fn = () => {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        if (this.props.isLoading) {
          return;
        }
        let screen = document.documentElement.clientHeight;
        let top = this.refs.more.getBoundingClientRect().top;
        if (top < screen) {
          this.props.loadMore();
        }
      }, 80);
    }
    window.addEventListener('scroll', this.fn);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.fn);
  }
  render() {
    return (
      <div className={styl.hasMore} ref="more">
        {this.props.hasMore ? <div onClick={this.loadMore}>加载更多</div> : <div>我是有底线的</div>}
      </div>
    )
  }
};