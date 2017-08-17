import React, {Component} from 'react';
import Star from '../Star';
import styl from './index.styl';
export default class InfoComponent extends Component {
    render() {
      let {img, star, price, subTitle, title, desc} = this.props.data;
        return (
            <div className={styl.info}>
              <div className={styl.detail}>
                <img src={img} alt=""/>
                <div>
                  <h3>{title}</h3>
                  <div className={styl.star}>
                    <Star count={star}/>
                    <span>￥{price}</span>
                  </div>
                  <p>{subTitle}</p>
                </div>
              </div>
              {/*讲内容转化到html*/}
              <div dangerouslySetInnerHTML={{__html: desc}}></div>
            </div>
        )
    }
};