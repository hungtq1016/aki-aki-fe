export type TBlogAside = {
    title: string,
    slug: string
}

export type TBlogItem = {
    title: string,
    slug: string,
    desc: string,
    imageUrl: string
}

export type TBlog = {
    [key:string]: Array<TBlogItem>
}