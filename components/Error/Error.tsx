import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Alert, AlertTitle } from '@material-ui/lab'
import Button from '@material-ui/core/Button'

import Back from '../Back'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '90%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '25px'
  },
  reload: {
    width: 350,
    marginTop: '25px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  }
}))

export default function Error({ message }) {
  const classes = useStyles()

  const error =
    typeof message === 'object' ||
    Array.isArray(message) ||
    typeof message === 'string'
      ? JSON.stringify(message)
      : message
  return (
    <div className={classes.root}>
      <Alert severity='error'>
        <AlertTitle>
          <h3>Oops! Something went wrong.</h3>
        </AlertTitle>
        {/* {error} */}
        <span>
          — <strong>Check your network connection!</strong>
        </span>
        <div className={classes.reload}>
          <Back />
          <Button
            onClick={() => window.location.reload()}
            variant='contained'
            color='primary'
            size='large'
          >
            Reload Page
          </Button>
        </div>
      </Alert>
    </div>
  )
}
