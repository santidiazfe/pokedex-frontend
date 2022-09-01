import React from 'react'
import Fondo from '../componentes/paginaPokemonComponentes/Fondo'
import { useParams } from 'react-router-dom';


const Details = () => {

  const {id, index} = useParams(); 

  return (
      <div className=" w-full m-auto h-screen">
        <Fondo
          id={id}
          index={index}
          />
      </div>
  
  )
}

export default Details