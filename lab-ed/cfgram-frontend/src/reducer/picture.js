const validatepicture = picture => {
  if (!picture) throw new Error('Invalid picture')

  let {_id, url, description, owner} = picture

  if (!_id || !url || !description || !owner) throw new Error('Invalid picture')
}

export default(state = [], {type,payload}) => {
  switch(type) {
    
  case 'CLIENT_PICTURE_CREATE':
    console.log('picture payload',payload);
    
    validatepicture(payload)
    return [payload,...state]
  
  case 'TOKEN_DELETE':
    return []
  
  default:
    return state
  }
}