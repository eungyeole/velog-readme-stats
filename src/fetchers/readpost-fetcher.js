import { request } from "../utils/index.js";

const fetcher = (variables) => {
  return request({
    query: `
            query ReadPost($username: String, $url_slug: String) {
                post(username: $username, url_slug: $url_slug) {
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

async function fetchReadPost(name, slug) {
  try {
    const { data } = await fetcher({ username: name, url_slug: slug });
    return data.data.post;
  } catch (e) {
    throw new Error(e);
  }
}

export default fetchReadPost;
