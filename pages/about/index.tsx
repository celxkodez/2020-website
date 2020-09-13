import React from 'react'
import { Typography, Divider, Container } from '@material-ui/core'
import PageHeader from '../../components/PageHeader'

import Layout from '../../components/Layout'
const Section = ({ title, desc, maxWidth = 'sm' }: any) => {
  return (
    <Container
      style={{ marginTop: '50px', marginBottom: '80px' }}
      maxWidth={maxWidth}
    >
      <Divider />
      <Typography
        component='h3'
        variant='h3'
        style={{ marginBottom: '20px', marginTop: '80px' }}
      >
        {title}
      </Typography>
      <Typography component='p' variant='body1'>
        {desc}
      </Typography>
    </Container>
  )
}

const About = () => {
  const name = 'About AfricaHacks 2020'

  return (
    <Layout>
      <PageHeader name={name} subHeader='Why are we doing AfricaHacks 2020' />

      <Section
        title='Motivation'
        desc='The ability to quickly validate an idea in a fun and welcoming setting has long been elusive for many. As a result, many organizations have used Hackathons to bring creators, developers, makers, and others together to build products. However, the organizers do not support the projects after the Hackathon, and in most cases, beginners are left out. AfricaHacks 2020 will be the first time Africa and North American creators, developers, and makers meet together to build projects with support from experts worldwide. Participants will be supported before the event, during the event, and after the event for FREE.'
      />
      <Section
        title='Who we are'
        desc="We are avid Hackathon goers, Makers, Creators, and Developers who have come together behind a mission to enable African and youth of African descent to get the support to thrive as creators, makers, and developers. AfricaHacks was founded by Uchi Uchibeke after founding NaijaHacks, Africa's Largest Hackathon, and Christine Dikongué."
      />
      <Section
        title='Why now?'
        desc='We believe that the location, family, or other situation should not determine if youth can build a company.  As technology unites the world, this is the first time that people from anywhere can truly connect virtually to co-create and co-innovate to make their lives, the lives of their families, and the world better.'
      />
    </Layout>
  )
}

export default About
