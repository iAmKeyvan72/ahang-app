import axios from 'axios';

const client = axios.create({
  baseURL: 'https://musicisho.com/wp-json/wp/v2/',
});

export const getLatestTracks = async () => {
  console.log('GET LatestTracks api call');
  const { data } = await client.get('posts');
  return data;
};

export const getSuggestionTracks = async () => {
  console.log('GET SuggestionTracks api call');
  const { data } = await client.get('posts');
  return data;
};

export const getTrack = async (_, id) => {
  console.log('GET Track api call');
  const { data } = await client.get(`posts/${id}`);
  return data;
};

export const getNextTracks = async (_, id) => {
  console.log('GET NextTracks api call');
  const { data } = await client.get('posts');
  return data;
};

export const getPromotions = async () => {
  console.log('GET Promotions api call');
  const { data } = await client.get('/posts?sticky=true&categories=2');
  return data;
};

export const getArtists = async () => {
  console.log('GET Artists api call');
  const { data } = await client.get('artist');
  return data;
};

export const getArtist = async (_, id) => {
  console.log('GET Artist api call');
  const { data } = await client.get(`artist/${id}`);
  return data;
};

export const getArtistTracks = async (_, id) => {
  console.log('GET ArtistTracks api call');
  const { data } = await client.get(`posts?artist=${id}`);
  return data;
};

export const getLatestPlaylists = async () => {
  console.log('GET LatestPlaylists api call');
  const { data } = await client.get('posts?categories=203');
  return data;
};

export const getSpecialPlaylists = async () => {
  console.log('GET SpecialPlaylists api call');
  try {
    const { data } = await client.get('/posts?sticky=true&categories=203');
    return data;
  } catch (error) {
    console.error('[ERROR] GET SpecialPlaylists in [api.js]', error);
  }
};

export const getPlaylist = async (_, id) => {
  console.log('GET Playlist api call');
  try {
    const { data } = await client.get(`posts/${id}`);
    return data;
  } catch (error) {
    console.error('[ERROR] GET Playlists in [api.js]', error);
  }
};

export const getLatestAlbums = async () => {
  console.log('GET LatestAlbums api call');
  const { data } = await client.get('posts?categories=3');
  return data;
};

export const getSpecialAlbums = async () => {
  console.log('GET SpecialAlbums api call');
  const { data } = await client.get('posts?sticky=true&categories=3');
  return data;
};

export const getAlbum = async (_, id) => {
  console.log('GET Album api call');
  const { data } = await client.get(`posts/${id}`);
  return data;
};

export const search = async (_, text) => {
  console.log('GET Search api call');
  const { data } = await client.get(`search/?search=${text}`);
  return data;
};
