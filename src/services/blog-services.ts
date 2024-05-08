import { BlogTypes } from "@/interfaces/blog-interface"
import { request, gql } from "graphql-request"

const graphqlApi = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT as string

export const BlogServices = {
  async getAllBlogs() {
    const query = gql`
      query GetAllPost {
        posts {
          id
          title
          description {
            text
          }
          slug
          createdAt
          coverImage {
            url
          }
          author {
            id
            name
            picture {
              url
            }
            createdAt
          }
          excerpt
        }
      }
    `

    const response = await request<{ posts: BlogTypes[] }>(graphqlApi, query)
    return response.posts
  },
  async getLastsBlogs() {
    const query = gql`
      query GetLastBlogs {
        posts(last: 3) {
          id
          title
          slug
          coverImage {
            url
          }
          createdAt
          author {
            name
            picture {
              url
            }
          }
          description {
            text
          }
        }
      }
    `
    const response = await request<{ posts: BlogTypes[] }>(graphqlApi, query)
    return response.posts
  },
  async getCategory() {
    const query = gql`
      query Category {
        categories {
          title
          slug
        }
      }
    `
    const response = await request<{ categories: BlogTypes[] }>(graphqlApi, query)
    return response.categories
  },
  async getBlogDetails(slug: string) {
    const query = gql`
      query GetBlogDetails($slug: String!) {
        post(where: { slug: $slug }) {
          id
          title
          excerpt
          createdAt
          description {
            text
            html
          }
          coverImage {
            url
          }
          author {
            name
            picture {
              url
            }
          }
        }
      }
    `
    const response = await request<{ post: BlogTypes }>(graphqlApi, query, { slug })
    return response.post
  },
  async getCategoryBlogs(slug: string) {
    const query = gql`
      query getCategoriesBlogs($slug: String!) {
        posts(where: { category: { Category: { slug: $slug } } }) {
          id
          title
          createdAt
          excerpt
          coverImage {
            url
          }
          slug
          description {
            text 
          }
          author {
            name
            picture {
              url
            }
          }
        }
      }
    `
    const response = await request<{ posts: BlogTypes }>(graphqlApi, query, { slug })
    return response.posts
  },
}
