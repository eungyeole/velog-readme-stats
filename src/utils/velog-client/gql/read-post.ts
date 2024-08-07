import { gql } from "graphql-request";

export const readPostGql = gql`
  query readPost($input: ReadPostInput!) {
    post(input: $input) {
      id
      title
      released_at
      updated_at
      body
      short_description
      is_markdown
      is_private
      is_temp
      thumbnail
      comments_count
      url_slug
      likes
      is_liked
      is_followed
      tags
      user {
        id
        username
        profile {
          id
          display_name
          thumbnail
          short_bio
          profile_links
        }
        velog_config {
          title
        }
      }
      comments {
        id
        user {
          id
          username
          profile {
            id
            thumbnail
          }
        }
        text
        replies_count
        level
        created_at
        level
        deleted
      }
      series {
        id
        name
        url_slug
        series_posts {
          id
          post {
            id
            title
            url_slug
            user {
              id
              username
            }
          }
        }
      }
      linked_posts {
        previous {
          id
          title
          url_slug
          user {
            id
            username
          }
        }
        next {
          id
          title
          url_slug
          user {
            id
            username
          }
        }
      }
    }
  }
`;
