import React, {Component} from 'react';
import axios from 'axios';
import CommentComponent from '../../../component/CommentComponent';
import LoadMore from '../../../component/ListComponent/LoadMore';

export default class Comment extends Component {
  constructor() {
    super();
    this.state = {
      page: 1,
      data: [],
      hasMore: true,
      isLoading: true
    };
  }
  componentWillMount() {
    this.fetchData();
  }
  loadMore = () => {
    this.setState({
      isLoading: true,
      page: ++this.state.page
    });
    this.fetchData();
  }
  fetchData = () => {
    axios.get(`/api/detail/commit/${this.props.id}/${this.state.page}`).then(res => {
      this.setState({
        data: this.state.data.concat(res.data.data),
        hasMore: res.data.hasMore,
        isLoading: false
      });
    });
  }
  render() {
    return (
      <div>
        <CommentComponent data={this.state.data}/>
        <LoadMore isLoading={this.state.isLoading} hasMore={this.state.hasMore} loadMore={this.loadMore}/>
      </div>
    )
  }
};