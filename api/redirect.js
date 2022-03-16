const fetchPost = require("../src/fetchers/post-fetcher");

module.exports = async (req, res) => {
  const { name, tag } = req.query;
  try {
    const post = await fetchPost(name, tag);
    const url = new String(
      `https://velog.io/@${post.user.username}/${post.url_slug}`
    );
    res.send(`<script>window.location.href='${url}'</script>`);
    return;
  } catch (e) {
    return res.send(e.message);
  }
};
