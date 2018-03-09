const validatephoto = photo => {
  if (!photo) throw new Error ('Invalid photo');
  let {_id, url, description, owner} = photo;
  if (!_id || !url || !description || !owner) throw new Error ('Invalid photo');
};

export default(state = [], {type, payload}) => {
  switch(type) {
  case 'CLIENT_PHOTO_CREATE': 
    validatephoto(payload);
    return [payload, ...state];
  case 'TOKEN_DELETE':
    return [];
  default:
    return state;
  }
};