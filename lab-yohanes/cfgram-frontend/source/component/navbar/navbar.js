import React from 'react'

export default class Navbar extends React.Component{
  render() {
    return(
      <header>
        <nav>
          <ul>
              {renderIf(this.props.token,
                <React.Fragment>
            <li><link to="/welcome/signup"></li>
              <li><link to="/welcome/signin"></li>
              </React.Fragment>
               )}
                <li><link to="/content"></li>
            </ul>
          </nav>
      <header>

    )
  }
}