import React from 'react';
import Content from './content';
import Landing from './landing';
import Setting from './setting';
import Navbar from './navbar';
import {Provider} from 'react-redux';
import appStoreCreate from '../lib/app-create-store';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';

const store = appStoreCreate();

export default class App extends React.Component{
  componentWillMount(){
    if(localStorage.token){
      store.dispatch({type: 'TOKEN_SET', payload: localStorage.token});
    }
    if(localStorage.username || localStorage.email || localStorage.bio || localStorage.avatar){
      const profile = {};
      profile['username'] = localStorage.username;
      profile['email'] = localStorage.email;
      profile['bio'] = localStorage.bio;
      profile['avatar'] = localStorage.avatar;
      store.dispatch({type: 'PROFILE_SET', payload: profile});
    }
  }

  render(){
    let {token} = store.getState();
    let {profile} = store.getState();
    console.log(token);
    console.log(profile);

    return(
      <main className="application">
        <Provider store={store}>
          <BrowserRouter>
            <React.Fragment>
              <Navbar profile={profile}/>
              <Route exact path="/welcome/:auth" component={Landing} />
              <Route exact path="/setting" component={() =>
                token
                  ? <Setting token={token} />
                  : <Redirect to="/welcome/signup" />}
              />
              <Route exact path="/content" component={() =>
                token
                  ? <Content token={token} />
                  : <Redirect to="/welcome/signup" />}
              />
            </React.Fragment>
          </BrowserRouter>
        </Provider>
      </main>
    );
  }
}
