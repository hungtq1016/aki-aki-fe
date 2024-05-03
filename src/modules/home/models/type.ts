export type TBanner = {
    imageUrl: string,
    title: string
}

export type TCertificate = TBanner
export type TQuote = TBanner
export type TGallery = TBanner

export type TCount = {
    title: string,
    number: number,
    duration: number,
    suffix: string,
}

export type TBlog = {
    title: string,
    slug: string,
    desc: string,
    imageUrl: string
}
