const createCard = require('../src/cards/new-log');
const createCardDark = require('../src/cards/new-log-black');
const fetchPost = require('../src/fetchers/post-fetcher');


module.exports = async (req, res) => {
    const { name, tag, background } = req.query;
    res.setHeader('Content-Type', 'image/svg+xml');
    try{
        const post = await fetchPost(name, tag);
        return res.send(background==='dark' ? createCardDark(post) : createCard(post))
    } catch(e){
        return res.send(e.message)
    }
}