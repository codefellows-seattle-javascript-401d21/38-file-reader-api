const validateprofile = profile => {
  if (!profile) throw new Error('Invalid profile')

  let {_id, avatar, bio} = profile

  if (!_id || !avatar || !bio) throw new Error('Invalid profile')
}

export default(state = [], {type,payload}) => {
  switch(type) {
    
  case 'CLIENT_PROFILE_CREATE':
    console.log('profile payload',payload);
    
    validateprofile(payload)
    return [payload,...state]
  
  case 'TOKEN_DELETE':
    return []
  
  default:
    return state
  }
}