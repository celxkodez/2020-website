import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = (props) => {
  const { title, description, image } = props
  return (
    <div className='application'>
      <Helmet>
        {title && <title>{title}</title>}
        {title && <meta property='og:title' content={title} />}
        {title && <meta name='twitter:title' content={title} />}
        {description && <meta name='description' content={description} />}
        {description && (
          <meta property='og:description' content={description} />
        )}
        {description && (
          <meta name='twitter:description' content={description} />
        )}
        {image && <meta property='og:image' content={image} />}
        {image && <meta name='twitter:image' content={image} />}
      </Helmet>
    </div>
  )
}
export default Meta
