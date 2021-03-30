/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
// import { useEffect } from 'react'
// import Router from 'next/router'
import 'normalize.css'
import '../styles/main.scss'
import '../styles/typography.scss'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Layout from '../components/Layout'
import PreviewAlert from '../components/PreviewAlert'
import { Metadata } from '../components/Prismic'
// import * as gtag from '../utils/gtag'
import '../utils/i18n'
import { Client, Predicates } from '../utils/prismic'

// Router.events.on('routeChangeComplete', (url) => gtag.pageview(url))

function App({ Component, pageProps }) {
    const { layout, preview, prismicData } = pageProps

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
            <Metadata {...prismicData?.page.data} />
            <PreviewAlert preview={preview} />
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Layout data={layout}>
                    <Component {...pageProps} />
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
