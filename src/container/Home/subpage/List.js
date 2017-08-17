import React, {Component} from 'react';
import ListComponent from '../../../component/ListComponent';
import axios from 'axios';
import LoadMore from '../../../component/ListComponent/LoadMore';

export default class List extends Component {
  constructor() {
    super();
    this.state = {
      hasMore: true,
      data: [],
      page: 0,
      isLoading: false
    };
  }
  componentDidMount() {
    axios.get(`/api/list/${this.props.cityName}/0`)
      .then(res => {
        this.setState({
          hasMore: res.data.hasMore,
          data: res.data.data
        });
      });
  }
  loadMore() {
    this.setState({
      page: this.state.page + 1,
      isLoading: true
    }, () => { //这个函数可以获取到最新的状态
      axios.get(`/api/list/${this.props.cityName}/${this.state.page}`)
        .then(res => {
          this.setState({
            hasMore: res.data.hasMore,
            data: this.state.data.concat(res.data.data),
            isLoading: false
          });
        });
    });
  }
  render() {
    return (
      <div>
        {this.state.data.length?<ListComponent data={this.state.data}/>:<div>正在加载中</div>}
        <LoadMore hasMore={this.state.hasMore} loadMore={this.loadMore.bind(this)} isLoading={this.state.isLoading}/>
      </div>
    )
  }
};