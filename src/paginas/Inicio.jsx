import FormInicio from '../componentes/inicioComponentes/FormInicio'
import { Link } from 'react-router-dom';



const Inicio = () => {
  
  return (
    <div className='flex'>
      <div  className='hidden md:flex md:flex-col md:justify-center md:items-center w-1/2 h-screen bg-[#ffca2a]'>
        <img className='md:w-[60%] mb-[100px]' src='https://tec.com.pe/wp-content/uploads/2021/02/ddew4m7-c69a2c41-518f-48ca-ba35-8ab1895464e0.png' />
        <img className='md:w-[40%]' src="https://media.giphy.com/media/xQMYEokueU2Ww16p8I/giphy.gif" alt='gif'/>
      </div>
      <div className='w-1/2 h-screen bg-white flex flex-col items-center justify-center form'>
        <img className='md:hidden w-[60%] mb-[50px]' src='https://tec.com.pe/wp-content/uploads/2021/02/ddew4m7-c69a2c41-518f-48ca-ba35-8ab1895464e0.png' />
        <h1 className='text-[30px] md:text-[40px] mb-[100px] text-center'>Inicia Sesión</h1>

        <FormInicio/>
        
        <Link to='/Pokedex'>
          <button type="submit" className='bg-[#ffca2a] rounded-2xl py-[5px] px-[20px] shadow-md hover:shadow-xl'>Ingresar como Visitante</button>
        </Link>
      </div>
      
      
    </div>
  )
}

export default Inicio