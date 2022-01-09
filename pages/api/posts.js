import posts from '../../src/posts.json';

const handler = (req, res) => {
  res.status(200).json(posts);
};

export default handler;
