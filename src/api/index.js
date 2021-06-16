const express = require('express');
const { request } = require('graphql-request');
const createCard = require('../cards/new-log');
const card = require('../cards/new-log');
const app = express()
const port = 3000;
app.get('/api', async (req, res)=>{
    res.setHeader('Content-Type', 'image/svg+xml');
    const endpoint = "https://v2.velog.io/graphql";
    const query = `
        query Posts($cursor: ID, $username: String, $temp_only: Boolean, $tag: String, $limit: Int) {
            posts(cursor: $cursor, username: $username, temp_only: $temp_only, tag: $tag, limit: $limit) {
            id
            title
            short_description
            thumbnail
            user {
                username
                profile {
                thumbnail
                }
            }
            url_slug
            released_at
            updated_at
            comments_count
            tags
            likes
            }
        }
    `;
    const variables = {
        "username": req.query.name,
        "limit" : 1,
        "tag" : req.query.tag
    }
    const { posts } = await request(endpoint, query, variables);
    if(posts.length > 0) res.send(createCard(posts[0]))
    else res.send("Not Found Post");
})



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app;