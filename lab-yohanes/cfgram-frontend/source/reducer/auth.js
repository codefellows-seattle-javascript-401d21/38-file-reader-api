export default (state = null, action) => {
  let { type, payload } = action;

  switch (type) {
  case 'TOKEN_SET': return payload;
  case 'TOKEN_DELETE':
    delete localStorage.token;
    return null;
  default: return state;
  }
};

//REDUCER FROM DEMO
// const validatePicture = picture => {
//   if(!picture)
//     throw new Error ('No Content');

//   let {_id, url, description, owner} = picture;

//   if(!_id || !url || !description || !owner)
//     throw new Error('No Content');
// };