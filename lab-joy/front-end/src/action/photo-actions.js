import superagent from 'superagent';
import { logError } from '../lib/utils';
import * as routes from '../route/photo-route';

// action creators
export const fetchAllAction = photos => ({
  type: 'CLIENT_PHOTO_FETCHALL',
  payload: photos,
});

export const createAction = photo => ({
  type: 'CLIENT_PHOTO_CREATE',
  payload: photo,
});

// async actions
export const fetchAllRequest = () => dispatch => {
  return superagent.get(`${__API_URL__}${routes.PHOTOS_ROUTE}`)
    .then(res => {
      dispatch(fetchAllAction(res.body.data));
    });
};

export const createActionRequest = photo => dispatch => {
  let token = localStorage.token;
  return superagent.post(`${__API_URL__}${routes.PHOTOS_ROUTE}`)
    .set('Authorization', `Bearer ${token}`)
    .field('description', photo.description)
    .attach('photo', photo.photo)
    .then(res => dispatch(createAction(res.body)));
};