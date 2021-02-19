import { Client, linkResolver } from '../../utils/prismic'

// eslint-disable-next-line consistent-return
export default async function preview(req, res) {
    const { token: ref, documentId } = req.query

    // Check the token parameter against the Prismic SDK
    const redirectUrl = await Client(req)
        .getPreviewResolver(ref, documentId)
        .resolve(linkResolver, '/')

    if (!redirectUrl) {
        return res.status(401).json({ message: 'Invalid token' })
    }

    // Enable Preview Mode by setting the cookies
    res.setPreviewData({
        ref, // pass the ref to pages so that they can fetch the draft ref
    })

    // Redirect the user to the share endpoint from same origin. This is
    // necessary due to a Chrome bug:
    // https://bugs.chromium.org/p/chromium/issues/detail?id=696204
    // res.write(
    //     `<!DOCTYPE html><html><head><meta http-equiv="Refresh" content="0; url=${redirectUrl}" />
    //   <script>window.location.href = '${redirectUrl}'</script>
    //   </head>`
    // )

    res.writeHead(302, { Location: `${redirectUrl}` })

    res.end()
}
