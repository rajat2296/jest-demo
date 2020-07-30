const request = require('request');

async function getFirstAlbumTitle() {
  const response = await request.get('https://jsonplaceholder.typicode.com/albums');
  return response.data[0].title;
}

module.exports = getFirstAlbumTitle;