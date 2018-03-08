import React from 'react';
import { renderIf } from '../../library/utilities';
import { tokenDelete } from '../../action/action-auth';
import { connect } from 'react-redux';

class Navbar extends React.Component {
  render() {
    return (
      <header>
        {/* <Avatar/> */}
        <nav>
          <ul>
            {renderIf(!this.props.token,
              <React.Fragment>
                <li><a href="/welcome/signup">Signup</a></li>
                <li><a href="/welcome/signin">Signin</a></li>
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

export default connect (mapDispatchToProps, mapStateToProps)(Navbar)