const getFirstAlbumTitle = require('./getAlbum');
const request = require('request');

jest.mock('request');
describe('sample mock test', () => {
  it('returns the title of the first album', async () => {
    request.get.mockResolvedValue({
      data: [
        {
          userId: 1,
          id: 1,
          title: 'My Initial Album'
        },
        {
          userId: 1,
          id: 2,
          title: 'Album: The Sequel'
        }
      ]
    });

    const title = await getFirstAlbumTitle();
    expect(title).toBe('My Initial Album');
  });
});