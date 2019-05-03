import reducer from '../reducer/photo';
require('jest');

describe('Photo Reducer', () => {
  it('should return the initial state on first call', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it('should handle CLIENT_PHOTO_CREATE', () => {
    let photo = { _id: '1234', url: 'photo.jpg', description: 'a photo', owner: 'me' };

    let state = reducer([], {
      type: 'CLIENT_PHOTO_CREATE',
      payload: photo,
    });

    expect(state).toMatchObject([photo]);
  });

  it('should handle CLIENT_PHOTO_DELETE', () => {
    let state = [{ _id: '1234', url: 'photo.jpg', description: 'a photo', owner: 'me' }];
    let photo = { _id: '1234', url: 'photo.jpg', description: 'a photo', owner: 'me' };

    let newState = reducer(state, { 
      type: 'CLIENT_PHOTO_DELETE', 
      payload: photo,
    });

    expect(newState).toMatchObject([]);
  });
});