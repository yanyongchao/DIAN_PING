import React, {Component} from 'react';
import styl from './index.styl';
import {Link} from 'react-router-dom';
export default class ListItem extends Component {
    render() {
      let {img, title, subTitle, price, distance, number, id} = this.props.data;
        return (
          <Link to={`/detail/${id}`}>
            <div className={styl.listItem}>
              <img src={img} alt=""/>
              <div className={styl.desc}>
                <span className={styl.distance}>{distance}</span>
                <h2 className={styl.title}>{title}</h2>
                <p className={styl.subtitle}>{subTitle}</p>
                <div className={styl.info}>
                  <strong>￥{price}</strong>
                  <span>已售{number}</span>
                </div>
              </div>
            </div>
          </Link>
        )
    }
};