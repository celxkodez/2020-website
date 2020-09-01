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
  const name = 'About us'

  return (
    <Layout>
      <PageHeader
        name={name}
        subHeader='Why did we create a platform to discover web monetization and web-monetized content'
      />

      <Section
        title='Motivation'
        desc='The ability to earn money for content you create has long been a struggle for many. As a result, many companies have used content created by Creators as a means to earn revenue from Ads. Creators make only a fraction of the revenue, and users have a poor user experience because they are obstructed with Ads. dTangle lets content creators share their content and users to discover and enjoy the content without Ads.'
      />
      <Section
        title='Who we are'
        desc='We are Engineers, Product Managers, and Data Scientists who have come together behind a mission to create innovative products and services for the future of earning and living.            '
      />
      <Section
        title='Why now?'
        desc='We believe that users should earn the majority of the value generated from their individual and collective contributions to the physical and digital world. When users create content, they should be paid when that content adds value to others. They should be able to own and authorize or deny access to the information that they create.'
      />
    </Layout>
  )
}

export default About
