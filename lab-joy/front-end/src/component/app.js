import React from 'react';
import Navbar from './navbar';
import Dashboard from './dashboard';
import Landing from './landing';
import { Provider } from 'react-redux';
import createStore from '../lib/app-create-store';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

const store = createStore();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      token: null,
    };
  }

  componentWillMount() {
    if (localStorage.token)
      store.dispatch({ type: 'TOKEN_SET', payload: localStorage.token });
  }

  componentDidMount() {
    store.subscribe(() => {
      // this.setState({
      //   token: store.getState().token,
      // });
    });
    localStorage.signInError = false;
    localStorage.signUpError = false;
  }

  render() {
    let { token } = store.getState();

    return (
      <main id="wrapper">
        <Provider store={store}>
          <BrowserRouter>
            <React.Fragment>
              <Navbar token={token} />
              <Route exact path="/welcome/:auth" component={props =>
                token ? <Redirect to="/dashboard" /> : <Landing {...props} />} />
              <Route exact path="/dashboard" component={() =>
                token
                  ? <Dashboard token={token} />
                  : <Redirect to="/welcome/signin" />}
              />
            </React.Fragment>
          </BrowserRouter>
        </Provider>
      </main>
    );
  }
}