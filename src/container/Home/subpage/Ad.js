import React, {Component} from 'react';
import axios from 'axios';
import styl from './index.styl';
export default class Ad extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }
  componentWillMount() {
    axios.get('/api/ad')
      .then(res => {
        this.setState({
          data: res.data
        });
        console.log(res.data);
      })
  }
  render() {
    return (
      <div className={styl.ad}>
        <h3>超值特惠</h3>
        <div className={styl.adList}>
          {this.state.data.length?this.state.data.map((item, index) => (
            <a href="#" key={index}>
              <img src={item.img} alt=""/>
            </a>
          )): '正在加载中'}
        </div>
      </div>
    )
  }
};