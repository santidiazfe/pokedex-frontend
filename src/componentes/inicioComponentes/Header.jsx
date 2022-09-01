import React ,{useState} from 'react'
import Pokeball from '../../imagenes/Pokeball.png'
import { Link } from 'react-router-dom'
import BotonAgregarPokemon from './BotonAgregarPokemon'



const Header = ({handleString, handleNumeric}) => {
    
  const [sortByNumber, setSortByNumber] = useState(true)

  const handleChange = () => {
    if(!sortByNumber) {
     handleString()
    } else {
      handleNumeric()
    }
    setSortByNumber(!sortByNumber)
  }

 

  return (
    <div className='flex flex-col'>
      <div className='flex items-center justify-between m-[30px]'>
        <div className='flex items-center'>
          <img className='w-[50px] md:w-[100px] md:h-[100px] mr-[30px]' src={Pokeball}  alt="" />
          <h1 className='text-gray-800 text-[30px] md:text-[50px] font-bold'>Pokédex</h1>
        </div>
        <button onClick={() => handleChange()}>
          {sortByNumber ? <i className={`fa-solid hover:border-2 hover:shadow-lg text-[25px] fa-arrow-down-a-z`}></i> :  <i className={`fa-solid text-[25px] hover:shadow-lg fa-arrow-down-1-9`}></i>}
        </button>
      </div>
      <div className='flex justify-center'>
        <Link to='/'>
          <button className='bg-[#ffca2a] rounded-2xl my-[30px]  px-[20px] py-[5px] shadow-md hover:shadow-xl'>Ingresar con Usuario</button>
        </Link>
      </div>
    </div>
  )
}

export default Header