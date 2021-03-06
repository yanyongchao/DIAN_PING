import React, {Component} from 'react';
import ListItem from './ListItem';
export default class ListComponent extends Component {
  render() {
    return (
      <div>
        {this.props.data.map((item, index) => (
          <ListItem key={index} data={item}/>
        ))}
      </div>
    )
  }
};