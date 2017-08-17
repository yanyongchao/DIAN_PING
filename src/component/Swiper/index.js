import React, {Component} from 'react';
import ReactSwipe from 'react-swipe';
import SwiperStyl from './swiper.styl';

export default class Swiper extends Component {
  constructor() {
    super();
    this.state = {
      index: 0
    };
  }
  render() {
    let opts = {
      continuous: false,
      callback: (index) => {
        this.setState({index});
      }
    };
    return (
      <div className={SwiperStyl.swiper}>
        <ReactSwipe className="carousel" swipeOptions={opts}>
          <div>
            <ul className={SwiperStyl.lists}>
              <li>
                <i className="iconfont icon-sousuo"></i>
                <p>美食</p>
              </li>
              <li>
                <i className="iconfont icon-sousuo"></i>
                <p>美食</p>
              </li>
              <li>
                <i className="iconfont icon-sousuo"></i>
                <p>美食</p>
              </li>
              <li>
                <i className="iconfont icon-sousuo"></i>
                <p>美食</p>
              </li>
              <li>
                <i className="iconfont icon-sousuo"></i>
                <p>美食</p>
              </li>
              <li>
                <i className="iconfont icon-sousuo"></i>
                <p>美食</p>
              </li>
              <li>
                <i className="iconfont icon-sousuo"></i>
                <p>美食</p>
              </li>
              <li>
                <i className="iconfont icon-sousuo"></i>
                <p>美食</p>
              </li>
              <li>
                <i className="iconfont icon-sousuo"></i>
                <p>美食</p>
              </li>
              <li>
                <i className="iconfont icon-sousuo"></i>
                <p>美食</p>
              </li>
            </ul>
          </div>
          <div>
            <ul className={SwiperStyl.lists}>
              <li>
                <i className="iconfont icon-sousuo"></i>
                <p>美食</p>
              </li>
              <li>
                <i className="iconfont icon-sousuo"></i>
                <p>美食</p>
              </li>
              <li>
                <i className="iconfont icon-sousuo"></i>
                <p>美食</p>
              </li>
              <li>
                <i className="iconfont icon-sousuo"></i>
                <p>美食</p>
              </li>
              <li>
                <i className="iconfont icon-sousuo"></i>
                <p>美食</p>
              </li>
              <li>
                <i className="iconfont icon-sousuo"></i>
                <p>美食</p>
              </li>
              <li>
                <i className="iconfont icon-sousuo"></i>
                <p>美食</p>
              </li>
              <li>
                <i className="iconfont icon-sousuo"></i>
                <p>美食</p>
              </li>
              <li>
                <i className="iconfont icon-sousuo"></i>
                <p>美食</p>
              </li>
              <li>
                <i className="iconfont icon-sousuo"></i>
                <p>美食</p>
              </li>
            </ul>
          </div>
          <div>
            <ul className={SwiperStyl.lists}>
              <li>
                <i className="iconfont icon-sousuo"></i>
                <p>美食</p>
              </li>
              <li>
                <i className="iconfont icon-sousuo"></i>
                <p>美食</p>
              </li>
              <li>
                <i className="iconfont icon-sousuo"></i>
                <p>美食</p>
              </li>
              <li>
                <i className="iconfont icon-sousuo"></i>
                <p>美食</p>
              </li>
              <li>
                <i className="iconfont icon-sousuo"></i>
                <p>美食</p>
              </li>
              <li>
                <i className="iconfont icon-sousuo"></i>
                <p>美食</p>
              </li>
              <li>
                <i className="iconfont icon-sousuo"></i>
                <p>美食</p>
              </li>
              <li>
                <i className="iconfont icon-sousuo"></i>
                <p>美食</p>
              </li>
              <li>
                <i className="iconfont icon-sousuo"></i>
                <p>美食</p>
              </li>
              <li>
                <i className="iconfont icon-sousuo"></i>
                <p>美食</p>
              </li>
            </ul>
          </div>
        </ReactSwipe>
        <ul className={SwiperStyl.dots}>
          <li className={this.state.index === 0 ? SwiperStyl.active : ''}></li>
          <li className={this.state.index === 1 ? SwiperStyl.active : ''}></li>
          <li className={this.state.index === 2 ? SwiperStyl.active : ''}></li>
        </ul>
      </div>
    )
  }
};