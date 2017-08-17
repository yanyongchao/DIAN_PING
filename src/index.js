import React from 'react';
import {render} from 'react-dom';
import './common/stylus/reset.css';
import './common/stylus/base.styl';
import App from './container/index';
import {Provider} from 'react-redux';
import {configStore} from './store';
const store = configStore(); //可以传入初始状态 userInfo: {cityName: shanghao}

// App负责选择哪一个页面

render(<Provider store={store}><App/></Provider>, document.querySelector('#root'));
