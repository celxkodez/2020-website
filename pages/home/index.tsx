import React from 'react'
import { Typography, Grid, Container } from '@material-ui/core'
import { useTheme, makeStyles } from '@material-ui/core/styles'

import Layout from '../../components/Layout'
import Lottie from 'lottie-react'
import animationData from '../../public/static/assets/animations/train.json'
import pallbearers from '../../public/static/assets/animations/pallbearers.json'
import group from '../../public/static/assets/animations/group.json'
import { faq } from '../../utils/copy.en'

// import Link from '../../components/Link'

/**
 * IDEAS:
 * Look: https://dribbble.com/shots/5714269-Hack-Brown-2019-Recess/attachments/1234038
 * Swag: http://shopify.github.io/buy-button-js/
 * Translation: https://github.com/Shopify/quilt/tree/master/packages/react-i18n
 * Shopify: https://github.com/Shopify/quilt
 * */

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
  },
  title: {
    marginBottom: '20px',
    marginTop: '20px',
    fontWeight: 'bolder',
    [theme.breakpoints.down('sm')]: {
      fontSize: '30pt'
    }
  }
}))

const Section = ({
  title = 'AfricaHacks Virtual Hackathon',
  content = 'another one',
  maxWidth = 'lg',
  animation = animationData
}: any) => {
  const theme = useTheme()
  const classes = useStyles()
  return (
    <Container
      style={{
        marginTop: '0px',
        marginBottom: '80px',
        borderRadius: '30px',
        background: 'linear-gradient(145deg, #2b2b2b, #333333)',
        boxShadow: '20px 20px 20px #292929, -20px -20px 20px #373737',
        padding: '50px',
        paddingBottom: '100px'
      }}
      maxWidth={maxWidth}
    >
      <Grid container>
        <Grid xs={12} sm={8}>
          <Typography component='h3' variant='h2' className={classes.title}>
            {title}
          </Typography>
          <Typography component='p' variant='body1'>
            {content}
          </Typography>
        </Grid>
        <Grid
          xs={12}
          sm={4}
          style={{ margin: 'auto', display: 'inline-block' }}
        >
          {/* <img src={banner} style={{ maxWidth: '100%', textAlign: 'center' }} />{' '} */}
          <Lottie animationData={animation} />
        </Grid>
      </Grid>
    </Container>
  )
}

const App = () => {
  React.useEffect(() => {}, [])

  const welcome = {
    title: 'AfricaHacks 2020',
    content: (
      <Typography className='' variant='subtitle1'>
        - Online Dec 5 - 11
        <br />
        - Demo day Dec 12, 2020
        <br />
        <br />
        <Typography className='' variant='h5'>
          VIRTUAL
        </Typography>
      </Typography>
    ),
    animation: pallbearers
  }

  const why = {
    title: <span>A different kind if Hackathon</span>,
    content: (
      <Typography className='' variant='subtitle1'>
        We aim to get 50% women, create an inclusive Hackathon via our beginner
        category, and create a sustainable impact by working with top teams
        post-hackathon in the AfricaHacks Startup creation program.
        <br />
        <br />
        Unlike other Hackathons, we follow up, match participants to companies
        and mentors and support the projects that come out of AfricaHacks
        Hackathon. Join us this year!
        <br />
        <br />
        We are the Largest black Tech Innovation competition in the world.
        <br />
        <br />
        <Typography className='' variant='h5' style={{ fontWeight: 'bolder' }}>
          Get Excited to learn, connect and play
        </Typography>
      </Typography>
    ),
    animation: group
  }
  const faqSection = {
    title: <span>F.A.Q</span>,
    content: faq.body.map((f) => (
      <div key={f.question}>
        <Typography className='' variant='h5'>
          {f.question}
        </Typography>
        <Typography className='' variant='subtitle1'>
          {f.answer}
        </Typography>
        <br />
        <br />
      </div>
    ))
  }

  return (
    <Layout>
      <Section {...welcome} />
      <Section {...why} />
      <Section {...faqSection} />
    </Layout>
  )
}

export default App
