import superagent from 'superagent'
import * as routes from '../routes' //* contains all my routes

export const CreateActionRquest = (picture) => (dispatch) => {
  //grab image from cookies as well
  let token = localStorage.getItem('token')

  return superagent.post(`${__API_URL__}${routes.PICTURES_ROUTES}`)
  .set('Authorizatino', `Bearer${token}`)
  .field('description', picture.dispcription)
  .attach('Photo', picture.photo)
    return
}