import superagent from 'superagent';
import * as routes from '../routes'; //* contains all my routes

export const createAction = picture => ({
  type: 'CLIENT_PICTURE_CREATE',
  payload: picture,
});

export const createActionRequest = (picture) => (dispatch) => {
  //grab image from cookies as well
  let token = localStorage.getItem('token');

  return superagent.post(`${__API_URL__}${routes.PICTURES_ROUTE}`)
    .set('Authorization', `Bearer ${token}`)
    .field('description', picture.description)
    .attach('photo', picture.photo)
    .then(response => {
      return dispatch(createAction(response.body));
    });
};
