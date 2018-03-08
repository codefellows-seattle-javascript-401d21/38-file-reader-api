import React from 'react'
import {Link} from 'react-router-dom'
import {renderIf} from '../../lib/utils'
// import {tokenDelete} from '../../action/auth-action'

export default class Navbar extends React.Component{
  render() {
    return(
      <header>
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
                <li onClick={() => this.props.store.dispatch({type: 'TOKEN_DELETE'})}><Link to="welcome/signin">Sign Out</Link></li>
              </React.Fragment>
              )}
            </ul>
          </nav>
      </header>

    )
  }
}

let mapDispatchToProps = dispatch => ({
  tokenDelete: () => dispatch(tokenDelete())
}) //not sure if i need this or if its even working. may need it later


//33 minutes 39 secinds refactoring