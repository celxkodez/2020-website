import React from 'react'
import { Typography, Grid, Container, Button } from '@material-ui/core'
import { useTheme, makeStyles } from '@material-ui/core/styles'

import Layout from '../../components/Layout'
import Lottie from 'lottie-react'
import animationData from '../../public/static/assets/animations/train.json'
import pallbearers from '../../public/static/assets/animations/pallbearers.json'
import group from '../../public/static/assets/animations/group.json'
import { faq, sponsors } from '../../utils/copy.en'

// import Link from '../../components/Link'

/**
 * IDEAS:
 * Look: https://dribbble.com/shots/5714269-Hack-Brown-2019-Recess/attachments/1234038
 * Swag: http://shopify.github.io/buy-button-js/
 * Translation: https://github.com/Shopify/quilt/tree/master/packages/react-i18n
 * Shopify: https://github.com/Shopify/quilt
 * Neu: https://neumorphism.io/#303030
 * Animations: https://lottiefiles.com/search?q=group&category=animations&animations-page=1
 * URL Meta data for dTangle: https://www.npmjs.com/package/url-metadata
 * UI/UX: https://dribbble.com/shots/11909159/attachments/3535138?mode=media
 *
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
  },
  imageDiv: {
    maxWidth: '100%',
    textAlign: 'center'
    // backgroundColor:"white"
  },
  imageLink: {
    position: 'relative',
    height: '50px',
    width: 'unset',
    padding: theme.spacing(1, 1),
    cursor: 'pointer',
    transition: 'opacity 250ms ease-in-out 0s',
    display: 'inline'
  },
  largeImage: {
    margin: 'auto',
    height: '100%',
    maxWidth: '100%',
    maxHeight: '140px',
    padding: theme.spacing(4, 4),
    [theme.breakpoints.down('sm')]: {
      maxHeight: '100px',
      padding: theme.spacing(2, 2)
    }
  },
  button: {
    height: '60px',
    borderRadius: '50px',
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 30px -8px'
  }
}))

const Section = ({
  title = 'AfricaHacks Virtual Hackathon',
  content = 'another one',
  maxWidth = 'lg',
  animation
}: any) => {
  const theme = useTheme()
  const classes = useStyles()
  return (
    <Container
      style={{
        marginTop: '0px',
        marginBottom: '80px',
        borderRadius: '30px',
        background: ' #fafafa',
        boxShadow: '20px 20px 60px #d5d5d5, -20px -20px 60px #ffffff;',
        padding: '50px',
        paddingBottom: '100px'
      }}
      maxWidth={maxWidth}
    >
      <Grid container>
        <Grid xs={12} sm={animation ? 8 : 12}>
          <Typography component='h3' variant='h2' className={classes.title}>
            {title}
          </Typography>
          <Typography component='p' variant='body1'>
            {content}
          </Typography>
        </Grid>
        {animation && (
          <Grid
            xs={12}
            sm={4}
            style={{ margin: 'auto', display: 'inline-block' }}
          >
            {/* <img src={banner} style={{ maxWidth: '100%', textAlign: 'center' }} />{' '} */}
            <Lottie animationData={animation} />
          </Grid>
        )}
      </Grid>
    </Container>
  )
}

const App = () => {
  React.useEffect(() => {}, [])
  const classes = useStyles()
  const mailtoLink = `mailto:team@africhacks.com?subject=AfricaHacks%202020%20Partnership&body=Hi%2C%20I%20will%20like%20to%20partner%20with%20you`

  const welcome = {
    title: 'AfricaHacks 2020',
    content: (
      <Typography className='' variant='subtitle1'>
        <Typography className='' variant='h5'>
          North America-Africa Sustainability edition
        </Typography>
        - Online Dec 5 - 11
        <br />
        - Demo day Dec 12, 2020
        <br />
        <br />
        <Button
          variant='contained'
          color='primary'
          className={classes.button}
          href={mailtoLink}
        >
          Partner with us
        </Button>
      </Typography>
    ),
    animation: pallbearers
  }

  const why = {
    title: `A different kind if Hackathon`,
    content: (
      <Typography className='' variant='subtitle1'>
        We aim to get 50% women, create an inclusive Hackathon via our beginner
        category, and create a sustainable impact by working with top teams
        post-hackathon in the{' '}
        <a
          href='https://africahacks.com/startups'
          target='_blank'
          rel='noopener noreferrer'
        >
          AfricaHacks Startup creation program
        </a>
        .
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
          Get Excited to learn, connect and create
        </Typography>
      </Typography>
    ),
    animation: group
  }
  const faqSection = {
    title: `F.A.Q`,
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
    )),
    animation: animationData
  }
  const sponsorSection = {
    title: `Past Sponsors`,
    content: (
      <div className={classes.imageDiv}>
        {sponsors.map((s) => (
          <a className={classes.imageLink} key={s.name}>
            <img key={s.name} src={s.imgSrc} className={classes.largeImage} />
          </a>
        ))}
      </div>
    )
  }

  return (
    <Layout>
      <Section {...welcome} />
      <Section {...why} />
      <Section {...sponsorSection} />
      <Section {...faqSection} />
    </Layout>
  )
}

export default App
