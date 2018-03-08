import superagent from 'superagent'
import * as routes from '../routes' //* contains all my routes

export const CreateActionRequest = (picture) => (dispatch) => {
  //grab image from cookies as well
  let token = localStorage.getItem('token')

  return superagent.post(`${__API_URL__}${routes.PICTURES_ROUTES}`)
  .set('Authorization', `Bearer${token}`)
  .field('description', picture.description)
  .attach('Photo', picture.picture)
  .then( response => {
    return dispatch(createAction(response.body))
  })
}