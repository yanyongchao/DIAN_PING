import React, {Component} from 'react';

export default class Star extends Component {
  constructor(props) {
    super(props);
    let ary = [];
    for(let i = 1; i <= 5; i++) {
      if (i <= props.count) {
        ary.push(true);
      } else {
        ary.push(false);
      }
    }
    this.state = {ary};
  }
  render() {
    return (
      <div>
        {this.state.ary.map((item, index) => (
          item ? <i className="ion-android-star" key={index} style={{color: 'red'}}></i> : <i className="ion-android-star-outline" key={index}></i>
        ))}
      </div>
    )
  }
};