import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import dynamic from 'next/dynamic'

import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'

const TVChartContainer = dynamic(() => import('react-tiny-link'), {
  ssr: false
})
console.log({ TVChartContainer: JSON.stringify(TVChartContainer) })
// const { ReactTinyLink } = TVChartContainer

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: '100%'
      // backgroundColor: theme.palette.background.paper
    },
    inline: {
      display: 'inline block'
    }
  })
)

export default function SuggestedCourses(props) {
  const {
    title,
    url = 'https://www.africahacks.com/',
    duration,
    description,
    size = 'small'
  } = props
  const classes = useStyles()

  return (
    <Card
      onClick={() => {
        // @ts-ignore
        window.open(url, {
          _blank: true
        })
      }}
      style={{
        cursor: 'pointer',
        marginBottom: '10px',
        width: '100%'
      }}
    >
      <ListItem alignItems='flex-start'>
        <ListItemText
          primary={title}
          secondary={
            <React.Fragment>
              {/* <ReactTinyLink
                cardSize={size}
                showGraphics
                maxLine={2}
                minLine={1}
                url={url}
                width='100%'
              /> */}
              <Typography
                component='span'
                variant='body2'
                className={classes.inline}
                color='textPrimary'
                display='block'
              >
                {duration}
              </Typography>
              <Typography
                component='span'
                variant='body2'
                className={classes.inline}
                color='textPrimary'
                display='block'
              >
                {description}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant='inset' component='li' />
    </Card>
  )
}
