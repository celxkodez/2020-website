import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Typography, Link, Container, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { ThemeProvider } from '@material-ui/styles'
import Nav from './nav'
import theme from '../components/theme'

const links = [
  {
    name: 'about ',
    url: 'https://www.africahacks.com/about-africahacks/',
    target: '_blank'
  },
  {
    name: 'africahacks.com',
    url: 'https://africahacks.com/',
    target: '_blank'
  },
  {
    name: 'start by africaHacks',
    url: 'https://africahacks.com/',
    target: '_blank'
  }
]

function FooterNavs() {
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
    // background: `url(
    //   'http://nanuric.com/wp-content/uploads/2020/07/Black-Stroked-Box.png'
    // )`,
    // backgroundRepeat: 'repeat'
  },
  main: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
    // background: 'white'
  },
  footer: {
    padding: theme.spacing(2, 2),
    marginTop: 'auto',
    borderTop: `1px solid ${
      theme.palette.type === 'light'
        ? theme.palette.grey[200]
        : theme.palette.grey[800]
    }`,
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[200]
        : theme.palette.grey[800]
  },
  logo: {
    width: '60px',
    cursor: 'pointer'
  }
}))

export default function StickyFooter({ children }) {
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <Nav />
        <Container maxWidth='lg'>{children}</Container>
      </div>
      <footer className={classes.footer}>
        <Container maxWidth={false} disableGutters>
          <FooterNavs />
          <Line />
          <Typography variant='body1'>
            AfricaHacks is a platform for African and black youth to create and
            build companies. Our Hackathons are our flagship program. We started
            AfricaHacks to inspire a new generation of Nigerians and Africans to
            be makers, leaders and innovators.
          </Typography>
          {/* <Copyright /> */}
        </Container>
      </footer>
    </ThemeProvider>
  )
}
