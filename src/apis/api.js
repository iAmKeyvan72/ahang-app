import axios from 'axios';

const client = axios.create({
  baseURL: process.env.BASE_URL,
});

export const getLatestTracks = async () => {
  const { data } = await client.get('posts');
  return data;
};

export const getSuggestionTracks = async () => {
  const { data } = await client.get('posts');
  return data;
};

export const getTrack = async (_, id) => {
  const { data } = await client.get(`posts/${id}`);
  return data;
};

export const getPromotions = async () => {
  const { data } = await client.get('/posts?sticky=true');
  return data;
};

export const getArtists = async () => {
  const { data } = await client.get('artist');
  return data;
};

export const getArtist = async (_, id) => {
  const { data } = await client.get(`artist/${id}`);
  return data;
};

export const getLatestPlaylists = async () => {
  const { data } = await client.get('posts?categories=203');
  return data;
};

export const getSpecialPlaylists = async () => {
  const { data } = await client.get('posts?sticky=true&categories=203');
  return data;
};

export const getPlaylist = async (_, id) => {
  const { data } = await client.get(`posts/${id}`);
  return data;
};

export const getLatestAlbums = async () => {
  const { data } = await client.get('posts?categories=3');
  return data;
};

export const getSpecialAlbums = async () => {
  const { data } = await client.get('posts?sticky=true&categories=3');
  return data;
};

export const getAlbum = async (_, id) => {
  const { data } = await client.get(`posts/${id}`);
  return data;
};

export const search = async (_, text) => {
  const { data } = await client.get(`search/?search=${text}`);
  return data;
};
