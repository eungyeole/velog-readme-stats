import { request } from "../utils/index.js";

const fetcher = (variables) => {
  return request({
    query: `
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
            `,
    variables,
  });
};

async function fetchPost(name, tag) {
  try {
    const { data } = await fetcher({ username: name, limit: 1, tag: tag });
    return data.data.posts[0];
  } catch (e) {
    throw new Error(e);
  }
}

export default fetchPost;
