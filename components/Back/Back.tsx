import * as React from 'react'
import { Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { ArrowBackIosOutlined } from '@material-ui/icons'

const styles = (theme) => ({
  iconButton: {
    marginRight: theme.spacing.unit
  }
})

const Back = (props) => {
  const { classes } = props
  return (
    <Button
      variant='outlined'
      color='primary'
      onClick={() => {
        window.history.back()
      }}
      className={classes.button}
    >
      <ArrowBackIosOutlined className={classes.iconButton} fontSize='small' />
      Back
    </Button>
  )
}

export default withStyles(styles)(Back)
