import superagent from 'superagent';
import * as routes from '../routes';

export const createAction = picture => ({
  type: 'CLIENT_PICTURE_CREATE',
  payload: picture,
});

export const getAction = picture => ({
  type: 'CLIENT_PICTURE_GETME',
  payload: picture,
});

export const createActionRequest = picture => dispatch => {
  let token = localStorage.getItem('token');

  return superagent.post(`${__API_URL__}${routes.PICTURES_ROUTE}`)
    .set('Authorization', `Bearer ${token}`)
    .field('description',picture.description)
    .attach('photo',picture.photo)
    .then(res => {
      return dispatch(createAction(res.body));
    });
};

export const getActionRequest = picture => dispatch => {
  let token = localStorage.getItem('token');

  return superagent.get(`${__API_URL__}${routes.PICTURES_ROUTE}/me`)
    .set('Authorization', `Bearer ${token}`)
    .then(res => dispatch(getAction(res.body)));
};