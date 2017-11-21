import React from 'react';

const resizeImage = (url, size) => url.replace('w500', size)

export default function (props){
  const image = props.serie.images.banner

  return(
    <div key={props.serie.slug} className='show-item'>
      <picture className='show-item__image'>
        <source srcSet={resizeImage(image, 'w150')} media='(max-width: 768px)' />
        <img srcSet={resizeImage(image, 'w300')} alt={props.serie.title} />
      </picture>

      <span className='show-item__title'>
        {props.serie.title}
      </span>
    </div>
  )
}
