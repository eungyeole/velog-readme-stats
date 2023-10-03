import { request } from "../utils/index.js";

const fetcher = (variables) => {
  return request({
    query: `
            query Posts($cursor: ID, $username: String, $temp_only: Boolean, $limit: Int) {
                posts(cursor: $cursor, username: $username, temp_only: $temp_only, limit: $limit) {
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

async function fetchPosts(name) {
  try {
    const { data } = await fetcher({ username: name, limit: 4 });
    return data.data;
  } catch (e) {
    throw new Error(e);
  }
}

export default fetchPosts;
