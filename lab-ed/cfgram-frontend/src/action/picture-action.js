import superagent from 'superagent'
import * as routes from '../routes'

export const createAction = picture => ({
  type: 'CLIENT_PICTURE_CREATE',
  payload: picture,
})

export const createActionRequest = (picture) => (dispatch) => {
  let token = localStorage.getItem('token')
  console.log(picture)
  return superagent.post(`${__API_URL__}${routes.PICTURES_ROUTE}`)
    .set('Authorization', `Bearer ${token}`)
    .field('description', picture.description)
    .attach('photo', picture.photo)
    .then( response => {
      console.log('RESPONSE.body',response.body)
      return dispatch(createAction(response.body))
    })
}