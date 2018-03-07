import superagent from 'superagent';
import * as routes from '../routes';

export const pictureCreate = picture => ({
  type: 'CLIENT_PICTURE_CREATE',
  payload: picture,
});

export const pictureDelete = () => ({

});

export const pictureCreateRequest = picture => dispatch => {
  let token = localStorage.token;
  return superagent.post(`${__API_URL__}${routes.PICTURES_ROUTE}`)
    .set('Authorization', `Bearer ${token}`)
    .field('description', picture.description)
    .attach('photo', picture.photo)
    .then(res => dispatch(pictureCreate(res.body)))
    .catch(console.error);
};

export const pictureDeleteRequest = () => {

};