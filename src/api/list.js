const createLatestPostsCard = require("../cards/latest-posts");
const fetchPosts = require("../fetchers/posts-fetcher");
const fetchReadPost = require("../fetchers/readpost-fetcher");

module.exports = async (req, res) => {
  const { name } = req.query;
  res.setHeader("Content-Type", "image/svg+xml");
  try {
    const posts = await fetchPosts(name);
    return res.send(createLatestPostsCard(posts));
  } catch (e) {
    return res.send(e.message);
  }
};
