import reducer from '../reducer/reducer';
import thunk from './redux-thunk';
import reporter from './redux-reporter';
import { createStore, applyMiddleware } from 'redux';

let appStoreCreare = () => createStore(reducer, applyMiddleware(thunk, reporter));

export default appStoreCreare;