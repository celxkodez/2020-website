import React from 'react'
import { useSession } from 'next-auth/client'
import { Container } from '@material-ui/core'

const logo = '/static/assets/images/white-full.png'
/**
 * The approach used in this component shows how to built a sign in and sign out
 * component that works on pages which support both client and server side
 * rendering, and avoids any flash incorrect content on initial page load.
 **/
const Nav = () => {
  // const [session, loading] = useSession()

  return (
    <nav>
      <noscript>
        <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
      </noscript>
      <Container maxWidth={false} disableGutters>
        <img
          src={logo}
          // className={classes.logo}
          onClick={() => window.location.assign('/')}
          style={{ width: '150px', cursor: 'pointer' }}
        />
      </Container>
    </nav>
  )
}

export default Nav
