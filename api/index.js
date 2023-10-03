import createCard from "../src/cards/new-log.js";
import createCardDark from "../src/cards/new-log-black.js";
import fetchPost from "../src/fetchers/post-fetcher.js";
import fetchReadPost from "../src/fetchers/readpost-fetcher.js";

export default async (req, res) => {
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
