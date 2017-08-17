import React, {Component} from 'react';
import axios from 'axios';
import InfoComponent from '../../../component/InfoComponent';
export default class Info extends Component {
  constructor() {
    super();
    this.state = {
      data: null
    }
  }
  componentWillMount() {
    axios.get(`/api/detail/info/${this.props.id}`).then(res => {
      this.setState({data: res.data});
    });
  }
  render() {
    return (
      <div>
        {this.state.data ? <InfoComponent data={this.state.data}/> : <div>正在加载中</div>}
      </div>
    )
  }
};