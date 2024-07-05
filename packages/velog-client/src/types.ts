export interface GetPostsParams {
  cursor?: number;
  limit?: number;
  username: string;
  tag?: string;
}

export type GetPostsResponse = {
  posts: Array<{
    id: string;
    title: string | null;
    short_description: string | null;
    thumbnail: string | null;
    url_slug: string | null;
    released_at: any | null;
    updated_at: any;
    comments_count: number | null;
    tags: Array<string>;
    is_private: boolean;
    likes: number | null;
    user: {
      id: string;
      username: string;
      profile: { id: string; thumbnail: string | null; display_name: string };
    } | null;
  }>;
};

export interface GetPostByUrlSlugParams {
  username: string;
  url_slug: string;
}

export interface GetPostByUrlSlugResponse {
  post: {
    id: string;
    title: string | null;
    released_at: any | null;
    updated_at: any;
    body: string | null;
    short_description: string | null;
    is_markdown: boolean | null;
    is_private: boolean;
    is_temp: boolean | null;
    thumbnail: string | null;
    comments_count: number | null;
    url_slug: string | null;
    likes: number | null;
    is_liked: boolean | null;
    is_followed: boolean | null;
    tags: Array<string>;
    user: {
      id: string;
      username: string;
      profile: {
        id: string;
        display_name: string;
        thumbnail: string | null;
        short_bio: string;
        profile_links: Record<string, any>;
      };
      velog_config: { title: string | null } | null;
    } | null;
    comments: Array<{
      id: string;
      text: string | null;
      replies_count: number | null;
      level: number | null;
      created_at: any | null;
      deleted: boolean | null;
      user: {
        id: string;
        username: string;
        profile: { id: string; thumbnail: string | null };
      } | null;
    }>;
    series: {
      id: string;
      name: string | null;
      url_slug: string | null;
      series_posts: Array<{
        id: string;
        post: {
          id: string;
          title: string | null;
          url_slug: string | null;
          user: { id: string; username: string } | null;
        } | null;
      }> | null;
    } | null;
    linked_posts: {
      previous: {
        id: string;
        title: string | null;
        url_slug: string | null;
        user: { id: string; username: string } | null;
      } | null;
      next: {
        id: string;
        title: string | null;
        url_slug: string | null;
        user: { id: string; username: string } | null;
      } | null;
    } | null;
  } | null;
}
