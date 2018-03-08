import superagent from 'superagent'

export const tokenSet = token => ({
  type: 'TOKEN_SET',
  payload: token,
})

export const tokenDelete = () => {
  delete localStorage.token
  return {type: 'TOKEN_DELETE'}
}

export const signupRequest = user => dispatch => {
  return superagent.post(`${__API_URL__}/signup`) //POST NEW ACCOUNT INTO OUR DATABASE
  .send(user)
  .then(response => {
    dispatch(tokenSet(response.text)) //once the user has created an account, a token is then rendered to the users login information
      try {
        localStorage.setItem('token', response.text) //i think this is where the text is received from local storeage, stringified
      } catch(e) {
        console.log(e)
        throw e //I'm pretty sure e is supposed to be Error
      }
  })
}

export const signinRequest = user => dispatch => {
  return superagent.get(`${__API_URL__}/login`)
  .auth(user.username, user.password) //authorizes/validates usersname and password
  .then(response => dispatch(tokenSet(response.text))) 
}
