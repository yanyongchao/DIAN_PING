import React, {Component} from 'react';
import Home from '../container/Home';
import Detail from '../container/Detail';
import User from '../container/User';
import Login from '../container/Login';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
// 路由的两种类型
export default class RouterMap extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch> {/*职匹配一次*/}
            <Route exact path="/" component={Home}/> {/*只有路径为/才匹配*/}
            <Route path="/detail/:id" component={Detail}/>
            <Route path="/login/:route?" component={Login}/>
            <Route path="/user" component={User}/>
          </Switch>
        </Router>
      </div>
    )
  }
};