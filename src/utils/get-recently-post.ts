import { velogClient } from "./velog-client";

interface GetRecentlyPostOptions {
  slug?: string;
  tag?: string;
}

interface RecentlyPost {
  title: string | null;
  likes: number | null;
  short_description: string | null;
  user: { username: string };
  tags: Array<string>;
}

export const getRecentlyPost = async (
  username: string,
  options?: GetRecentlyPostOptions
) => {
  const { slug, tag } = options || {};

  if (slug) {
    const { post } = await velogClient.getPostByUrlSlug({
      username,
      url_slug: slug,
    });
    return post as RecentlyPost;
  }

  const { posts } = await velogClient.getPosts({
    username,
    limit: 1,
    tag,
  });

  return posts[0] as RecentlyPost;
};
