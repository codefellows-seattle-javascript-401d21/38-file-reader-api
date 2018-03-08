import superagent from 'superagent'
import * as routes from '../routes'

export const createAction = profile => ({
  type: 'CLIENT_PROFILE_CREATE',
  payload: profile,
})

export const createActionRequest = (profile) => (dispatch) => {
  let token = localStorage.getItem('token')
  return superagent.post(`${__API_URL__}${routes.PROFILES_ROUTE}`)
    .set('Authorization', `Bearer ${token}`)
    .field('bio', profile.bio)
    .attach('avatar', profile.avatar)
    .then( response => {
      console.log('RESPONSE.body',response.body)
      return dispatch(createAction(response.body))
    })
}