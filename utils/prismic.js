import Prismic from '@prismicio/client'

export const apiEndpoint = 'https://sn65.cdn.prismic.io/api/v2'
export const accessToken = process.env.PRISMIC_ACCESS_TOKEN

export const createClientOptions = (req = null, prismicAccessToken = null) => {
    const reqOption = req ? { req } : {}
    const accessTokenOption = prismicAccessToken
        ? { accessToken: prismicAccessToken }
        : {}
    return {
        ...reqOption,
        ...accessTokenOption,
    }
}

// Client method to query documents from the Prismic repo
export const Client = (req = null) =>
    Prismic.client(apiEndpoint, createClientOptions(req, accessToken))

export const { Predicates } = Prismic

export const linkResolver = (doc) => {
    switch (doc.type) {
        case 'page':
            return doc.uid === 'index' ? '/' : `/${doc.uid}`
        case 'blog':
            return '/blog'
        case 'blog_post':
            return `/blog/${doc.uid}`
        default:
            // eslint-disable-next-line no-console
            console.warn('no linkResolver case:', doc)
    }

    // Backup for all other types
    return '/'
}

export const isEmptyLink = (link) =>
    !link?.link_type || link.link_type === 'Any'
