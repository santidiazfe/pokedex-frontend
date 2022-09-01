import React from 'react'

const ImagenPokemon = ({img}) => {
  return (
    <>
        <img
        className='w-[100px] h-[100px]'
            src={img}
            />
    </>
  )
}

export default ImagenPokemon