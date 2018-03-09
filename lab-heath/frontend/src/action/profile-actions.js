import superagent from 'superagent';
import * as routes from '../routes';

export const createProfile = profile => ({
  type: 'CLIENT_PROFILE_CREATE',
  payload: profile,
});

export const getMeProfile = profile => ({
  type: 'CLIENT_PROFILE_ME',
  payload: profile,
});

export const updateProfile = profile => ({
  type: 'CLIENT_PROFILE_UPDATE',
  payload: profile,
});


export const createProfileRequest = profile => (dispatch, getState) => {
  let token = localStorage.getItem('token');
  return superagent.post(`${__API_URL__}${routes.PROFILES_ROUTE}`)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
    .then(res => dispatch(createProfile(res.body)));

};

export const getMeProfileRequest = profile => (dispatch, getState) => {
  let token = localStorage.getItem('token');
  return superagent.get(`${__API_URL__}${routes.PROFILES_ROUTE}/me`)
    .set('Authorization', `Bearer ${token}`)
    .then(res => dispatch(getMeProfile(res.body)));

};

export const updateProfileRequest = profile => (dispatch, getState) => {
  let token = localStorage.getItem('token');
  let {file, bio, _id} = profile;
  return superagent.put(`${__API_URL__}${routes.PROFILES_ROUTE}/${profile._id}`)
    .set('Authorization', `Bearer ${token}`)
    .field('bio', bio)
    .attach('avatar', file)
    .then(res => dispatch(updateProfile(res.body)));

};
