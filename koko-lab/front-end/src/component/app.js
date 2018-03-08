import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import createStore from '../library/app-create-store';
import Landing from './landing/landing';
import Dashboard from './dashboard/dashboard';
import { Redirect } from 'react-router-dom';
import Navbar from './navbar/navbar';

const store = createStore();

export default class App extends React.Component {
  componentWillMount() {
    if(localStorage.token) store.dispatch({type: 'TOKEN_SET', payload: localStorage.token});
  }
  render() { 
    let {token} = store.getState();
    return ( 
      <main className="application">
        <Provider store={store}>
          <BrowserRouter>
            <React.Fragment>
              <Navbar token={token} store={store}/>
              <Route exact path="/welcome/:auth" component={Landing}/>
              <Route exact path="/dashboard" component={() =>
                token
                  ? <Dashboard token={token}/>
                  : <Redirect to="/welcome/signup"/>}
              />
            </React.Fragment>
          </BrowserRouter>
        </Provider>
      </main>
    );
  }
}