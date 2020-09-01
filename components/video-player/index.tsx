import React, { useEffect, useRef } from 'react'
import { Player } from 'video-react'

const PlayerComponent = (props) => {
  console.log({ props })

  console.log({ props })

  const player = useRef(null)

  return (
    <div style={{ maxHeight: '200px' }}>
      <Player ref={player} videoId='video-1'>
        <source src={props.video} />
      </Player>
    </div>
  )
}
export default PlayerComponent
