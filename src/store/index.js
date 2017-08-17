import {createStore} from 'redux';
import reduces from '../reducers';

export function configStore(initState) {
  return createStore(reduces, initState,window.devToolsExtension?window.devToolsExtension():undefined);
}