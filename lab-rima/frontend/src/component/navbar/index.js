import React from 'react';
import {connect} from 'react-redux';
import {renderIf} from '../../lib/utils';
import PictureForm from '../picture-form/index';
//import Avatar from '../avatar';
import * as profileActions from '../../action/profile-actions';

class Navbar extends React.Component {
  render(){
    if(localStorage.profile){
      var avatar_url = store.getState().profile.avatar;
      console.log('avatar url', avatar_url);
    }
    return (
      <div>
        <ul>
          <li>
            This will be avatar!
            <img src={avatar_url} alt='no image!' className='navbar-avatar' />
          </li>
        </ul>
      </div>
    );
  }
}

export default connect(null, null)(Navbar);
