/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import { useEffect } from 'react'
import Router from 'next/router'
import Head from 'next/head'
import 'normalize.css'
import '../styles/main.scss'
import '../styles/typography.scss'
import Layout from '../components/Layout'
import * as gtag from '../utils/gtag'
import '../utils/i18n'
import { Client, Predicates } from '../utils/prismic'
import LOCALES from '../constants/locales'
import METADATA from '../constants/metadata'

// Router.events.on('routeChangeComplete', (url) => gtag.pageview(url))

function App({ Component, pageProps }) {
    const { layout, theme, ...otherProps } = pageProps

    useEffect(() => {
        // primary
        document.documentElement.style.setProperty(
            '--primary',
            theme?.data.primary || '#000000'
        )
        // primary 80%
        document.documentElement.style.setProperty(
            '--primary80',
            `${theme?.data.primary || '#000000'}cc`
        )
        // primary 65%
        document.documentElement.style.setProperty(
            '--primary65',
            `${theme?.data.primary || '#000000'}a6`
        )
        // primary 50%
        document.documentElement.style.setProperty(
            '--primary50',
            `${theme?.data.primary || '#000000'}80`
        )

        // background
        document.documentElement.style.setProperty(
            '--background',
            theme?.data.background || '#ffffff'
        )

        // detail
        document.documentElement.style.setProperty(
            '--detail',
            theme?.data.detail || '#0047A0'
        )
    }, [theme])
    return (
        <>
            <Head>
                <title>{METADATA.title}</title>
                <meta charSet='utf-8' />
                <meta
                    httpEquiv='Content-Type'
                    content='text/html; charset=utf-8'
                />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <meta name='description' content={METADATA.description} />
                <link rel='icon' href={METADATA.favicon} />
                {/* Open Graph/Facebook */}
                <meta property='og:title' content={METADATA.title} />
                <meta
                    property='og:description'
                    content={METADATA.description}
                />
                <meta property='og:image' content={METADATA.image} />
                <meta property='og:url' content={METADATA.url} />
                <meta property='og:type' content='website' />
                {/* Twitter */}
                <meta name='twitter:title' content={METADATA.title} />
                <meta
                    name='twitter:description'
                    content={METADATA.description}
                />
                <meta name='twitter:image' content={METADATA.image} />
                <meta name='twitter:card' content='summary' />
            </Head>
            <Layout data={layout}>
                <Component {...otherProps} />
            </Layout>
        </>
    )
}

App.getInitialProps = async (context) => {
    const { router } = context
    const { locale } = router

    const query = await Client().query(
        [Predicates.any('document.type', ['header', 'footer', 'theme'])],
        { lang: LOCALES[locale] }
    )

    const results = query?.results || {}

    const header = results.find(({ type }) => type === 'header')
    const footer = results.find(({ type }) => type === 'footer')
    const theme = results.find(({ type }) => type === 'theme')

    return {
        pageProps: {
            layout: {
                header,
                footer,
            },
            theme,
        },
    }
}

export default App
