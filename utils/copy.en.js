import React from 'react'
import { Link } from '@material-ui/core'

export const faq = {
  title: 'Frequently asked questions',
  body: [
    {
      question: 'What is AfricaHacks 2020?',
      answer:
        'At AfricaHacks, African and black youth of different skill levels come together and create unique software or hardware projects from scratch. We empower and enable teams to make something great by providing an abundance of resources like workshops, mentors, sponsors, challenges and prizes.'
    },
    {
      question: 'Who can participate?',
      answer:
        'Anyone of any education level from anywhere in Africa are eligible to apply for AfricaHacks!'
    },
    {
      question: 'How much does it cost to attend AfricaHacks?',
      answer:
        'Admission to AfricaHacks is completely free. We also provide food and some travel reimbursement!'
    },
    {
      question: 'How do I get to AfricaHacks?',
      answer:
        'Actual building and workshops happen remotely. Demo day will also be virtual'
    },
    {
      question: 'How many people can be on a team?',
      answer:
        'You can form teams of up to 4 people. There are no restrictions for who they can be, so you can team up with hackers from any school, country, or experience level. Teams can be formed before or during the event.'
    },
    {
      question: 'What if I’m new to programming?',
      answer:
        "That's okay! A hackathon is a great place to gain valuable experience. There will be tutorials, workshops and mentors to help throughout the event!"
    },
    {
      question: "What if I've never been to a hackathon before?",
      answer:
        'AfricaHacks welcomes participants of all skill levels. We’ll have talks, mentors and workshops to help you with your project; hackathons can be a great place to learn new skills in a short amount of time. Just be eager to learn, and excited to meet lots of awesome people. Check out our Hacker Guide!'
    },
    {
      question: 'Can I start working on my hack before the event?',
      answer:
        'No. In the interest of fairness, participants should not be working on their projects before AfricaHacks begins and we do not allow participants to work on pre-existing projects. However, you can familiarize yourself with all the tools and technologies you intend to use beforehand!'
    },
    {
      question: 'When will applications for AfricaHacks 2020 open?',
      answer:
        'Applications for AfricaHacks opened September 15, 2020 - follow us on social media to learn more!'
    },
    {
      question: "What if I can't find a team?",
      answer:
        "Don't worry! The team formation session on the first day of AfricaHacks is a great place to find teammmates!"
    },
    {
      question: 'What can I win?',
      answer:
        'Over 30 Prizes worth over $100,000 will be won at AfricaHacks. Stay tunned for prize announcements!'
    },
    {
      question: 'Is there a Code of Conduct?',
      answer: (
        <>
          Yes! Hackers are expected to adhere to the{' '}
          <Link
            href='https://drive.google.com/file/d/1L00oPvBuFytYs2KIvFLkH0TYJ3nd_01X/view?usp=sharing'
            target='_blank'
            rel='noopener noreferrer'
          >
            AfricaHacks Code of Conduct.
          </Link>
          .
        </>
      )
    },
    {
      question: '404: Question Not Found',
      answer: (
        <>
          If your question is not listed here, please feel free to reach out to
          us at{' '}
          <Link href='mailto:team@africahacks.com'>team@africahacks.com</Link>{' '}
          or on{' '}
          <Link
            href='https://www.twitter.com/naija_hacks'
            target='_blank'
            rel='noopener noreferrer'
          >
            Twitter
          </Link>
          .
        </>
      )
    }
  ]
}

// const logo = '/static/assets/images/black-logo.png'
const NexmoLogoImg = '/static/assets/sponsors/2019/Nexmo_VonageAPI_vert.png'
const AWSLogoImg = '/static/assets/sponsors/2019/aws.png'
const SketchLogoImg = '/static/assets/sponsors/2019/sketch.png'
const OnePassword = '/static/assets/sponsors/2019/1Password.png'
const XYZDomains = '/static/assets/sponsors/2019/xyz.png'
const Pepsi = '/static/assets/sponsors/2019/pepsi.png'

export const sponsors = [
  {
    imgSrc: 'https://naijahacks.com/2018/res/sponsors/linode.png',
    link: 'https://www.linode.com/',
    tier: 'gold',
    name: 'Linode'
  },
  {
    imgSrc: NexmoLogoImg,
    link: 'https://nexmo.com',
    tier: 'gold',
    name: 'Nexmo'
  },
  {
    imgSrc: AWSLogoImg,
    link: 'https://www.aws.com/',
    tier: 'gold',
    name: 'Amazon'
  },
  {
    imgSrc: 'https://naijahacks.com/2018/res/sponsors/balsamiq.png',
    link: 'https://balsamiq.com/',
    tier: 'silver',
    name: 'Balsamiq'
  },
  {
    name: 'BizSkills Academy',
    tier: 'startup',
    imgSrc:
      'https://i2.wp.com/www.africahacks.com/wp-content/uploads/2020/03/BizSkills-Academy-Logo.png?w=1600&ssl=1',
    link: 'https://www.bizskillsacademy.com/'
  },
  {
    tier: 'gaming',
    imgSrc: 'https://naijahacks.com/2018/res/sponsors/isabiplay.png',
    link: 'https://isabiplay.com/',
    name: 'iSabiPlay'
  },
  {
    imgSrc:
      'https://dka575ofm4ao0.cloudfront.net/pages-transactional_logos/retina/2661/r0mjZTxOTjmP9vbv2Ypl',
    link: 'https://particle.io',
    tier: 'silver',
    name: 'Particle'
  },
  {
    imgSrc: 'https://naijahacks.com/2018/res/sponsors/stemhubfoundation.png',
    link: 'https://stemhubfoundation.com',
    tier: 'silver',
    name: 'StemHub Foundation'
  },
  {
    imgSrc: 'https://naijahacks.com/2018/res/sponsors/twilio.png',
    link: 'https://www.twilio.com/',
    tier: 'bronze',
    name: 'Twilio'
  },
  {
    imgSrc: 'https://naijahacks.com/2018/res/sponsors/stickermule.png',
    link: 'https://mule.to/NaijaHacks',
    tier: 'bronze',
    name: 'Stickermule'
  },
  {
    imgSrc: 'https://naijahacks.com/2018/res/sponsors/jetbrains.png',
    link: 'http://jetbrains.com/',
    tier: 'silver',
    name: 'Jetbrains'
  },
  {
    imgSrc: SketchLogoImg,
    link: 'https://www.sketch.com',
    tier: 'silver',
    name: 'Sketch'
  },
  {
    imgSrc: 'https://naijahacks.com/2018/res/sponsors/wolfram.png',
    link: 'https://www.wolfram.com/',
    tier: 'silver',
    name: 'Wolfram'
  },
  {
    imgSrc: 'https://cdn.worldvectorlogo.com/logos/axure-2.svg',
    link: 'https://www.axure.com/',
    tier: 'silver',
    name: 'Axure'
  },
  {
    imgSrc:
      'https://raw.githubusercontent.com/eggheadio/egghead-brand/master/Egghead-Logo-Dark.png',
    link: 'https://egghead.io',
    tier: 'silver',
    name: 'Egghead.io'
  },
  {
    imgSrc: 'https://naijahacks.com/2018/res/sponsors/digitalocean.png',
    link: 'https://digitalocean.com/',
    tier: 'silver',
    name: 'DigitalOcean'
  },
  {
    imgSrc: XYZDomains,
    link: 'https://gen.xyz/',
    tier: 'silver',
    name: '.XYZ Domains'
  },
  {
    imgSrc: 'https://naijahacks.com/2018/res/sponsors/printivo.png',
    link: 'https://www.printivo.com/',
    tier: 'silver',
    name: 'Printivo'
  },
  {
    imgSrc:
      'https://4.bp.blogspot.com/-sn_1frB-tto/W_eevs6kyzI/AAAAAAAANhE/ZPlkvH6ysTAMuBJlbtYsSxkC28xaRrZugCLcBGAs/s1600/PCBWay%2BTlogo.png',
    link: 'https://pcbway.com',
    tier: 'silver',
    name: 'PCBWay'
  },
  {
    imgSrc: OnePassword,
    link: '1Password.com',
    tier: 'bronze',
    name: '1Password'
  }
  // {
  //   imgSrc:
  //     "https://uploads-ssl.webflow.com/5bddf05642686caf6d17eb58/5cf52c37420081eec94ed662_VF_Logo_Black.png",
  //   link: "https://voiceflow.com",
  //   tier: "silver",
  //   name: "Voiceflow"
  // },
]
