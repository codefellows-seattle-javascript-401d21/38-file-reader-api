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
      localStorage.setItem('username', payload.username);
      localStorage.setItem('email', payload.email);
      localStorage.setItem('bio', payload.bio);
      localStorage.setItem('avatar', payload.avatar);
      return [payload, ...state];
    case 'PROFILE_SET':
      return payload;
    case 'TOKEN_DELETE':
      return [];
    default:
      return state;
  }
}
