const validatepicture = picture => {
  if(!picture)
    throw new Error('Invalid Picture');

  let {_id, avatar, bio, email, username, owner} = picture;

  if(!_id || !avatar || !bio || !owner || !username || !email)
    throw new Error('Invalid Picture');
};

export default(state = [], {type, payload}) => {
  switch(type){
    case 'CLIENT_PROFILE_CREATE':
      validatepicture(payload);
      return [payload, ...state];
    case 'TOKEN_DELETE':
      return [];
    default:
      return state;
  }
}
