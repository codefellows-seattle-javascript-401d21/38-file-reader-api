import React from 'react'
import Content from './content'
import Landing from './landing'
import {Provider} from 'react-redux'
import createStore from '../lib/app-create-store'
import {BrowserRouter, Route, Redirect} from 'react-router-dom'
import NavBar from './navbar/index'
import Profile from './settings/profile/index'

const store = createStore()

export default class App extends React.Component {
  componentWillMount() {
    if(localStorage.token)
      store.dispatch({type: 'TOKEN_SET', payload: localStorage.token})
  }


  render() {
    let {token} = store.getState()

    return (
      <main className="application">
        <Provider store={store}>
          <BrowserRouter>
            <React.Fragment>
              <NavBar token={token}/>
              <Route exact path="/welcome/:auth" component={Landing}/>
              <Route exact path="/content" component={() =>
                token
                ? <Content token={token}/>
                : <Redirect to="/welcome/signup"/>}
              />
              <Route exact path="/profile" component={() =>
                token
                ? <Profile token={token}/>
                : <Redirect to="/welcome/signup"/>}
              />
            </React.Fragment>
          </BrowserRouter>
        </Provider>
      </main>
    )
  }
}
