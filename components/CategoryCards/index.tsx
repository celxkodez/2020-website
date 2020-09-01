import React from 'react'
import { Grid } from '@material-ui/core'
import ItemCard from '../item-card'

export default (props) => {
  const cards = [
    {},
    {
      sm: 5
    },
    {
      sm: 7
    },
    {},
    {
      sm: 8
    },
    {
      sm: 4
    }
  ] as any
  return (
    <Grid container spacing={3}>
      {cards.map((card) =>
        card.sm ? (
          <Grid item xs={12} sm={card.sm}>
            <ItemCard />
          </Grid>
        ) : (
          <Grid item xs={12}>
            <ItemCard size='large' />
          </Grid>
        )
      )}
    </Grid>
  )
}
