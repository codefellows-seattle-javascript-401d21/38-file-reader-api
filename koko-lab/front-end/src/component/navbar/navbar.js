import React from 'react';
import { renderIf } from '../../library/utilities';
import { tokenDelete } from '../../action/action-auth';
import { connect } from 'react-redux';
import Avatar from 'react-avatar';


class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      avatar: false,
    };
  }
  render() {
    return (
      <header>
        {/* <Avatar src={} name="avatar-photo"/> */}
        <nav>
          <ul>
            {renderIf(!this.props.token,
              <React.Fragment>
                <li><a href="/welcome/signup">Sign Up</a></li>
                <li><a href="/welcome/signin">Sign In</a></li>
              </React.Fragment>
            )}
            {renderIf(this.props.token,
              <React.Fragment>
                <li><a href="/dashboard">Dashboard</a></li>
                <li onClick={this.props.tokenDelete}><a href="/welcome/signin">Logout</a></li>
              </React.Fragment>
            )}
          </ul>
        </nav>
      </header>
    );
  }
}

let mapStateToProps = state => ({});
let mapDispatchToProps = dispatch => ({
  tokenDelete: () => dispatch(tokenDelete),
});

export default connect (mapStateToProps, mapDispatchToProps)(Navbar);