/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import { useEffect } from 'react'
import Router from 'next/router'
import Head from 'next/head'
import 'normalize.css'
import '../styles/main.scss'
import '../styles/typography.scss'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Layout from '../components/Layout'
import * as gtag from '../utils/gtag'
import '../utils/i18n'
import { Client, Predicates } from '../utils/prismic'
import METADATA from '../constants/metadata'

// Router.events.on('routeChangeComplete', (url) => gtag.pageview(url))

function App({ Component, pageProps }) {
    const { layout, ...otherProps } = pageProps

    const theme = createMuiTheme({
        palette: {
            primary: {
                main: '#1cb1d1',
            },
            secondary: {
                main: '#fdb71a',
            },
        },
    })

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

            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Layout data={layout}>
                    <Component {...otherProps} />
                </Layout>
            </ThemeProvider>
        </>
    )
}

App.getInitialProps = async () => {
    const query = await Client().query(
        [Predicates.any('document.type', ['header', 'footer'])],
        {
            fetchLinks: [
                'nav_group.main_link',
                'nav_group.main_text',
                'nav_group.dropdown',
            ],
        }
    )

    const results = query?.results || {}

    const header = results.find(({ type }) => type === 'header')
    const footer = results.find(({ type }) => type === 'footer')

    return {
        pageProps: {
            layout: {
                header,
                footer,
            },
        },
    }
}

export default App
