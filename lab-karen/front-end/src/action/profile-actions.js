import superagent from 'superagent';
import * as routes from '../routes';

export const createAction = profile => ({
  type: 'CLIENT_PROFILE_CREATE',
  payload: profile,
});

export const createActionRequest = (profile) => (dispatch) => {
  let token = localStorage.getItem('token');
  console.log(profile)
  return superagent.post(`${__API_URL__}${routes.PROFILES_ROUTE}`)
    .set('Authorization', `Bearer ${token}`)
    .field('description', profile.description)
    .attach('photo', profile.photo)
    .then( response => {
      return dispatch(createAction(response.body));
    });
};
