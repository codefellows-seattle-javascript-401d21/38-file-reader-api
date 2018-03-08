import superagent from 'superagent';

export const createAction = picture => ({
  type: 'CLIENT_PICTURE_CREATE',
  payload: picture,
});

export const createActionRequest = (picture) => (dispatch) => {
  let token = localStorage.getItem('token');

  return superagent.post(`${__API_URL__}/photos`)
    .set('Authorization', `Bearer ${token}`)
    .field('description',picture.description)
    .attach('photo',picture.photo)
    .then( response => {
      return dispatch(createAction(response.body)); // Vinicio - 'closing' the chain
    });
};