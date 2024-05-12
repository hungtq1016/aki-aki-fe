import type { TEntity } from '@/core/models/type'
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
  userId: string,
  blogId: string,
  content: string,
  subComments: TComment[] | null
}