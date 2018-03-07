import React from 'react';
import Dashboard from './dashboard/dashboard'
import Landing from './landing/landing'
import {Provider} from 'react-redux';
import createStore from '../lib/app-create-store';
import {BrowserRouter, Route} from 'react-router-dom';

const store = createStore ();

export default class App extends React.Component{
  componentWillMount() {
    if(localStorage.token)
      store.dispatch({type: 'TOKEN_SET', payload: localStorage.token})
  }
  render() {
    let token = store.getState()
    return(
      <main className="application">
        <Provider store={store}>
          <BrowserRouter>
            <React.Fragment>
              <Route exact path ="/Welcome/:auth" component={Landing}/>
              <Route exact path="/dashboard" component={() =>
                token ?
                <Dashboard token={token}/> :
                <Redirect to="/welcome/signup"/>}
              />
            </React.Fragment>
          </BrowserRouter>
        </Provider>
      </main>
    )
  }
}