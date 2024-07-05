import createBadge from "../src/cards/velog-badge.js";

export default async (req, res) => {
  const { name } = req.query;
  res.setHeader("Content-Type", "image/svg+xml");

  try {
    return res.send(createBadge(name));
  } catch (e) {
    return res.send(e.message);
  }
};
