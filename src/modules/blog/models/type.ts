import type { TEntity, TRequest } from '@/core/models/type'
import type { TUser } from '@/modules/admin-oauth2/models/type'
import type { AnchorType } from '@/modules/include/models/enum'

export type TBlogAside = {
  title: string
  slug: string
}

export type TBlogItem = {
  title: string
  slug: string
  desc: string
  imageUrl: string
}

export type TBlog = {
  [key: string]: Array<TBlogItem>
}

export type TBlogDetail = {
  title: string
  type: string
  slug: string
  desc: string
  content: string
  imageUrl: string
}

export type TSocial = {
  title: string
  url: string
  lable: string
  type: AnchorType
}

export type TComment = TEntity & {
  parentId: string | null
  userId: string
  blogId: string
  content: string
  children: TComment[] | null
}

export type TCommentRequest = TRequest & {
  parentId: string | null
  userId: string
  blogId: string
  content: string
  left: number
  right: number
}

export type TCommentResponse = TEntity & {
  parentId: string | null
  userId: string
  user: TUser
  blogId: string
  content: string
  children: TCommentResponse[]
  left: number
  right: number
}
