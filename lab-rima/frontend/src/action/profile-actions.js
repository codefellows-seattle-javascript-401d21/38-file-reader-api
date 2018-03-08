import superagent from 'superagent';
import * as routes from '../routes';

export const createAction = picture => ({
  type: 'CLIENT_PROFILE_CREATE',
  payload: picture,
});

export const createActionRequest = (picture) => (dispatch) => {
  let token = localStorage.getItem('token');

  return superagent.post(`${__API_URL__}${routes.PROFILES_ROUTE}`)
    .set('Authorization', `Bearer ${token}`)
    .field('bio', picture.description)
    .attach('avatar', picture.photo)
    .then(response => {
      return dispatch(createAction(response.body));
    });
};
