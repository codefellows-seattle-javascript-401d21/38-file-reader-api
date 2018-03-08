const validatePicture = picture => {
  if(!picture)
    throw new Error('No Content');

  let {_id, url, description, owner} = picture;
  if(!_id || !url || !description || !owner) //validation first
  throw new Error ('No Content');
};

export default (state = [], {type, payload}) => {  //we want to pass in state and action for export
  switch(type){
  case 'CLIENT_PICTURE_CREATE':
    validatePicture(payload);
    return[payload, ...state];
  case 'TOKEN_DELETE': return []; //return default state
  default: return state; //if no actions return default state
  }
};