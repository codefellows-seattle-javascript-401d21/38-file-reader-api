import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {renderIf} from '../../lib/utils';
import {tokenDelete} from '../../action/auth-actions';
console.log(tokenDelete)
class Navbar extends React.Component {
  componentWillMount(){
    console.log('nav propsx',this.props);
  }
  render() {
    return (
      <header>
        {/* <Avatar/> */}
        <nav>
          <ul>
            {renderIf(!this.props.token,
              <React.Fragment>
                <li><Link to="/welcome/signup">Signup</Link></li>
                <li><Link to="/welcome/signin">Signin</Link></li>
              </React.Fragment>
            )}
            {renderIf(this.props.token,
              <React.Fragment>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li onClick={this.props.tokenDelete}><Link to="/welcome/signin">Logout</Link></li>
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

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
