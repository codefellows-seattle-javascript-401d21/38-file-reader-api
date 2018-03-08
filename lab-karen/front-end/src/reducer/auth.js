export default (state=null, action) => {
  let {type, payload} = action;

  switch(type) {
  case 'TOKEN_SET': return payload;
  case 'TOKEN_DELETE':
    console.log('token delete');
    delete localStorage.token;
    return null;
  default: return state;
  }
};
