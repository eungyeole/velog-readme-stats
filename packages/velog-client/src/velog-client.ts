import { client } from "./client";
import { postsGql } from "./gql/posts";
import {
  GetPostByUrlSlugParams,
  GetPostByUrlSlugResponse,
  GetPostsParams,
  GetPostsResponse,
} from "./types";
import { readPostGql } from "./gql/read-post";

class VelogClient {
  constructor() {}

  public async getPosts(params: GetPostsParams) {
    return await client.request<GetPostsResponse>(postsGql, {
      input: params,
    });
  }

  public async getPostByUrlSlug(params: GetPostByUrlSlugParams) {
    return await client.request<GetPostByUrlSlugResponse>(readPostGql, {
      input: params,
    });
  }
}

export const velogClient = new VelogClient();
