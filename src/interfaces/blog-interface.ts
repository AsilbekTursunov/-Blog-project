export interface BlogTypes {
  id: string
  title: string
  description: {
    text: string
    html: string
  }
  slug: string
  createdAt: Date
  coverImage: {
    url: string
  }
  author: {
    id: string
    name: string
    picture: {
      url: string
    }
    createdAt: string
  }
  excerpt: string

  categories: {
    title: string

    slug: string
  }
}
