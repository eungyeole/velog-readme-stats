const createLatestPostsCard = require("../src/cards/latest-posts");
const fetchPosts = require("../src/fetchers/posts-fetcher");

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
