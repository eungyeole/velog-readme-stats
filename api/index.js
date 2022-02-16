const createCard = require("../src/cards/new-log");
const createCardDark = require("../src/cards/new-log-black");
const fetchPost = require("../src/fetchers/post-fetcher");
const fetchReadPost = require("../src/fetchers/readpost-fetcher");

module.exports = async (req, res) => {
  const { name, tag, color, slug } = req.query;
  res.setHeader("Content-Type", "image/svg+xml");
  try {
    const post = !slug
      ? await fetchPost(name, tag)
      : await fetchReadPost(name, slug);
    return res.send(color === "dark" ? createCardDark(post) : createCard(post));
  } catch (e) {
    return res.send(e.message);
  }
};
