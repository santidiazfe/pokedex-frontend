import React from 'react'

const Buscador = (props) => {


  return (
    
    <div className='w-full flex justify-center'>
        <input 
        placeholder='Buscar'
        className='w-[95%] h-[30px] flex border-2 border-[#E0E0E0] md:m-[25px] justify-center text-center rounded-lg hover:border-gray-400'
        type="text" 
        onChange={(e) => props.onChange (e.target.value) }
        />
    </div>
  )
}

export default Buscador