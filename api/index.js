const createCard = require('../src/cards/new-log');
const fetchPost = require('../src/fetchers/post-fetcher');

module.exports = async (req, res) => {
    const { name, tag } = req.query;
    res.setHeader('Content-Type', 'image/svg+xml');
    try{
        const post = await fetchPost(name, tag);
        return res.send(createCard(post))
    } catch(e){
        return res.send(e.message)
    }
}
