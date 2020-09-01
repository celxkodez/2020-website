import * as React from 'react'
import { Container, Typography } from '@material-ui/core'
import Meta from '../meta'

const PageHeader = (props) => {
  const { name, subHeader } = props
  const title = subHeader ? name : `Web Monetized ${name}`
  const subTitle =
    subHeader ||
    `These are ${name} with Web monetization enabled. You can browse these ${name} without and not have to worry about ads or distractions.`
  return (
    <Container component='main' maxWidth='lg'>
      <Meta title={title} description={subTitle} />
      <Typography
        variant='h3'
        component='h3'
        style={{ fontWeight: 500 }}
        align='center'
      >
        {title}
      </Typography>
      <Typography
        variant='body1'
        align='center'
        style={{ marginBottom: '70px' }}
      >
        {subTitle}
      </Typography>
    </Container>
  )
}

export default PageHeader
