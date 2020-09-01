import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import '../node_modules/video-react/dist/video-react.css'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Provider } from 'next-auth/client'

import theme from '../components/theme'

import './home/home.css'

export default function MyApp(props) {
  const { Component, pageProps } = props

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  const { session } = pageProps

  return (
    <Provider options={{ site: process.env.SITE }} session={session}>
      <React.Fragment>
        <Head>
          <link rel='shortcut icon' href='/static/assets/images/icon.png' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1, shrink-to-fit=no'
          />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <meta name='theme-color' content='#000000' />

          <link rel='manifest' href='%PUBLIC_URL%/manifest.json' />

          <meta name='monetization' content='$ilp.uphold.com/B3wYJrpHiUyQ' />
          <title>
            AfricaHacks Virtual Hackathon - 2020 Canada-Africa Sustainability
            edition
          </title>
          <meta
            name='description'
            content="AfricaHacks is Largest black Tech Innovation competition and Africa's largest Hackathon founded by Uchi Uchibeke"
          />

          {/* <!-- OG --> */}
          <meta
            property='og:title'
            content='AfricaHacks Virtual Hackathon - 2020 Canada-Africa Sustainability edition'
          />
          <meta property='og:type' content='website' />
          <meta property='og:url' content='https://hackathon.africahacks.com' />
          <meta
            property='og:description'
            content="AfricaHacks is Largest black Tech Innovation competition and Africa's largest Hackathon founded by Uchi Uchibeke"
          />
          <meta
            property='og:image'
            content='/static/assets/images/banner.png'
          />
          <meta property='og:url' content='https://hackathon.africahacks.com' />
          <meta
            property='og:site_name'
            content='AfricaHacks Virtual Hackathon 2020'
          />

          {/* <!-- Twitter --> */}
          <meta
            name='twitter:title'
            content='AfricaHacks Virtual Hackathon - 2020 Canada-Africa Sustainability edition'
          />
          <meta
            name='twitter:description'
            content="AfricaHacks is Largest black Tech Innovation competition and Africa's largest Hackathon founded by Uchi Uchibeke"
          />
          <meta
            name='twitter:image'
            content='/static/assets/images/banner.png'
          />
          <meta name='twitter:card' content='summary' />
          <meta name='twitter:site' content='@africa_hacks' />
          <meta name='twitter:creator' content='@africa_hacks' />

          <link rel='shortcut icon' href='/static/assets/images/icon.png' />
          <link rel='icon' href='/static/assets/images/icon.png' />

          <meta name='author' content='Uchi Uchibeke ' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-status-bar-style' content='black' />
          <meta name='format-detection' content='telephone=no' />
          <meta
            name='apple-touch-icon'
            content='/static/assets/images/icon.png'
          />
          <meta name='application-name' content='AfricaHacks' />
          <meta name='msapplication-TileColor' content='#ffffff' />
          <meta
            name='msapplication-TileImage'
            content='/static/assets/images/icon.png'
          />
          {/* _         ___          _                 ____  ____                __              
     / \      .' ..]        (_)               |_   ||   _|              [  |  _          
    / _ \    _| |_  _ .--.  __   .---.  ,--.    | |__| |   ,--.   .---.  | | / ]  .--.   
   / ___ \  '-| |-'[ `/'`\][  | / /'`\]`'_\ :   |  __  |  `'_\ : / /'`\] | '' <  ( (`\]  
 _/ /   \ \_  | |   | |     | | | \__. // | |, _| |  | |_ // | |,| \__.  | |`\ \  `'.'.  
|____| |____|[___] [___]   [___]'.___.'\'-;__/|____||____|\'-;__/'.___.'[__|  \_][\__) )  */}
        </Head>
        <ThemeProvider theme={theme}>
          <a
            className='badge'
            href='https://africahacks.com/?utm_medium=ApprovalBadge&utm_source=approved-hackathon'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src='https://africahacks-assets.s3.amazonaws.com/approval-badge/black.svg'
              alt='Approved African Hackathon. AfricaHacks Member Event'
              // style='width:100%'
              id='african-hackathon-africahacks-member-badge'
            />
          </a>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </React.Fragment>
    </Provider>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
}
