import superagent from 'superagent';
import * as routes from '../route/photo-route';

export const createAction = photo => ({
  type: 'CLIENT_PHOTO_CREATE',
  payload: photo,
});

export const createActionRequest = photo => dispatch => {
  let token = localStorage.token;
  return superagent.post(`${__API_URL__}${routes.PHOTOS_ROUTE}`)
    .set('Authorization', `Bearer ${token}`)
    .field('description', photo.description)
    .attach('photo', photo.photo)
    .then(res => dispatch(createAction(res.body)));
};