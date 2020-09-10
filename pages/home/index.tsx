import React from 'react'
import { Typography, Grid, Container, Button } from '@material-ui/core'
import { useTheme, makeStyles } from '@material-ui/core/styles'
import { useI18n } from '@shopify/react-i18n'

import Layout from '../../components/Layout'
import Lottie from 'lottie-react'
import animationData from '../../public/static/assets/animations/train.json'
import pallbearers from '../../public/static/assets/animations/pallbearers.json'
import group from '../../public/static/assets/animations/group.json'
import { sponsors } from '../../utils/copy.en'

import en from '../../utils/locales/en.json'
import fr from '../../utils/locales/fr.json'
import enFAQ from '../../utils/locales/faq/en.json'
import frFAQ from '../../utils/locales/faq/fr.json'

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
    // filter: `grayscale(100%)`
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
        background: ' #F2CF1D',
        boxShadow: '20px 20px 60px #ceb019, -20px -20px 60px #ffee21',
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

  const welcome = {
    title: i18n.translate('Home.title'),
    content: (
      <Typography className='' variant='subtitle1'>
        <Typography className='' variant='h5'>
          {i18n.translate('Home.subTitle')}
        </Typography>
        {i18n.translate('Home.largest')}
        <br />
        {i18n.translate('Home.online')}
        <br />
        {i18n.translate('Home.demoDay')}
        <br />
        <br />
        <Button
          variant='contained'
          color='primary'
          className={classes.button}
          href={mailtoLink}
        >
          {i18n.translate('Home.partnerWithUs')}
        </Button>
      </Typography>
    ),
    animation: pallbearers
  }

  const why = {
    title: i18n.translate('Home.differentKind'),
    content: (
      <Typography className='' variant='subtitle1'>
        {i18n.translate('Home.weAim')}{' '}
        <a
          href='https://africahacks.com/startups'
          target='_blank'
          rel='noopener noreferrer'
        >
          {i18n.translate('Home.startupCreation')}
        </a>
        .
        <br />
        <br />
        {i18n.translate('Home.weFollowUp')}
        <br />
        <br />
        {i18n.translate('Home.largestBlackHackathon')}
        <br />
        <br />
        <Typography className='' variant='h5' style={{ fontWeight: 'bolder' }}>
          {i18n.translate('Home.excitedTo')}
        </Typography>
      </Typography>
    ),
    animation: group
  }
  const faqs = {
    en: enFAQ,
    fr: frFAQ
  }
  const faq = faqs[i18n.locale]
  const faqSection = {
    title: `F.A.Q`,
    content: faq.map((f) => (
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
    title: i18n.translate('Home.pastSponsors'),
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
