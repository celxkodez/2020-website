import React, { useState } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import {
  Typography,
  Link,
  Container,
  Divider,
  FormControl,
  Select,
  MenuItem
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useRouter } from 'next/router'
import { useI18n } from '@shopify/react-i18n'

import { ThemeProvider } from '@material-ui/styles'
import Nav from './nav'
import theme from '../components/theme'
import { localeState } from '../utils'
import en from '../utils/locales/en.json'
import fr from '../utils/locales/fr.json'

function FooterNavs() {
  const router = useRouter()

  const [i18n] = useI18n({
    id: 'NotFound',
    fallback: en,
    translations(locale) {
      if (locale === 'en') {
        return en
      } else if (locale === 'fr') {
        return fr
      }
    }
  })

  const links = [
    router.pathname === '/about'
      ? {
          name: i18n.translate('Footer.home'),
          url: '/'
        }
      : {
          name: i18n.translate('Footer.about'),
          url: '/about'
        },
    {
      name: i18n.translate('Footer.startByAfricaHacks'),
      url: 'https://start.africahacks.com/',
      target: '_blank'
    },
    {
      name: 'Africahacks.com',
      url: 'https://africahacks.com/',
      target: '_blank'
    }
  ]

  return (
    <Typography variant='body2' color='textSecondary'>
      {links.map(({ name, url, target }) => (
        <Link
          color='inherit'
          href={url}
          key={name}
          target={target}
          style={{ paddingRight: '27px' }}
        >
          {name}
        </Link>
      ))}
    </Typography>
  )
}

function Line() {
  return (
    <Typography style={{ marginTop: '10px', marginBottom: '10px' }}>
      <Divider />
    </Typography>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  main: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  footer: {
    padding: theme.spacing(0, 2),
    marginTop: 'auto',
    // borderTop: `1px solid ${
    //   theme.palette.type === 'light'
    //     ? theme.palette.grey[200]
    //     : theme.palette.grey[800]
    // }`,
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.background[200]
        : theme.palette.background[800]
  },
  logo: {
    width: '60px',
    cursor: 'pointer'
  },
  languagePicker: {
    position: 'fixed',
    left: 20,
    bottom: 20,
    [theme.breakpoints.down('sm')]: {
      bottom: 20
    }
  }
}))

export default function StickyFooter({ children }) {
  const router = useRouter()
  const classes = useStyles()
  const [locale, setLocale] = useState(localeState.get() || 'en')
  const [i18n] = useI18n({
    id: 'NotFound',
    fallback: en,
    translations(locale) {
      if (locale === 'en') {
        return en
      } else if (locale === 'fr') {
        return fr
      }
    }
  })

  const handleChange = (event) => {
    setLocale(event.target.value)
    localeState.set(event.target.value)
    router.reload()
  }

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <Nav />
        <Container maxWidth='lg'>{children}</Container>
      </div>
      <Line />
      <footer className={classes.footer}>
        <Container maxWidth={false} disableGutters>
          <FormControl className={classes.languagePicker}>
            <Select
              id='date-picker'
              value={locale}
              onChange={handleChange}
              variant='outlined'
            >
              <MenuItem value='en'>English</MenuItem>
              <MenuItem value='fr'>Français</MenuItem>
            </Select>
          </FormControl>
          <FooterNavs />
          <Line />
          <Typography variant='body1'>
            {i18n.translate('Footer.isAPlatform')}
          </Typography>
          <br />
          {/* <Copyright /> */}
        </Container>
      </footer>
    </ThemeProvider>
  )
}
