export const validateProfile = profile => {
  if (!profile) {
    throw new Error('profile required');
  }

  let { bio, username, email, owner } = profile;

  if (!bio || !username || !email || !owner) {
    throw new Error('invalid profile');
  }

};

export default (state = [], { type, payload }) => {

  switch (type) {
  case 'CLIENT_PROFILE_CREATE':
    // validateProfile(payload);
    return payload;
  case 'CLIENT_PROFILE_ME':
    return payload;
  case 'CLIENT_PROFILE_UPDATE':
    return payload;
  case 'TOKEN_REMOVE':
    return null;
  default:
    return state;
  }
};