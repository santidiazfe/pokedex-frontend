import React from 'react'
import { Link } from 'react-router-dom'

const BotonAgregarPokemon = () => {
  return (
    <div>
      <Link to={`/AgregarPokemon`}>
        <div className='flex justify-center'>
            <button className='bg-[#ffca2a] rounded-2xl my-[30px]  px-[20px] py-[5px] shadow-md hover:shadow-xl'>Agregar Pokémon</button>
        </div>      
      </Link>
    </div>
  )
}

export default BotonAgregarPokemon