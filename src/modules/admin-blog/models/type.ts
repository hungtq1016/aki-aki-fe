import type { TEntity, TRequest } from '@/core/models/type'

export type TBlog = TEntity & {
  title: string
  type: string
  slug: string
  desc: string
  content: string
  videoEmbed: string
  imageUrl: string
  categoryId: string
}

export type TBlogResponse = TEntity & {
  title: string
  type: string
  slug: string
  desc: string
  content: string
  videoEmbed: string
  imageUrl: string
  categoryId: string,
  category: TCategory
}

export type TCategory = TEntity & {
  title: string
  slug: string
}

export type TCategoryRequest = TRequest & {
  title: string
  slug: string
}

export type TCategoryResponse = TEntity & {
  title: string
  slug: string
  blogs: TBlog[]
}


export type TTag = TEntity & {
  title: string
  slug: string
}

export type TTagRequest = TRequest & {
  title: string
  slug: string
}

export type TBlogRequest = TRequest & {
  title: string
  slug: string
  desc: string
  content: string
  imageUrl: string
  videoEmbed: string
  categoryId: string
}

export type TFileResponse = TRequest & {
  title: string
  alt: string
  size: number
  path: string
  extension: string
}
