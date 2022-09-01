import { useState } from 'react';
import { Link } from 'react-router-dom'
import Tipos from './Tipos'

const AgregarPokemonForm = () => {

    const [nombre, setNombre] = useState('');
    const [url, setUrl] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [movimientos, setMovimientos] = useState('');
    const [hp, setHp] = useState('');
    const [atk, setAtk] = useState('');
    const [def, setDef] = useState('');
    const [satk, setsatk] = useState('');
    const [sdef, setSdef] = useState('');
    const [spd, setSpd] = useState('');


    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        //validacion del form
        if([nombre, url, descripcion, peso, altura, movimientos, stats].includes('')){
            console.log('hay al menos un campo vacio')
            setError(true);
            return;
        }

        setError(false)
    }


  return (
    <div className='w-full bg-[#ffca2a] h-full pt-[50px]'>
        <div className='flex w-4/5 md:w-1/3 h-full m-auto  border-black border-[0.1px] fuente flex-col bg-[#F7F7F7] rounded-xl '>
            <div className="flex justify-center items-center">
                <Link to={`/Pokedex `}>        
                    <i className="fa-solid flex  text-[25px] fa-arrow-left mr-[20px]"></i>
                </Link>
                <h1 className='flex justify-center my-[100px] font-bold text-4xl'>Agregar Pokemon</h1>
            </div>
            <form onSubmit={handleSubmit} className='flex flex-col w-[80%] md:w-full items-center justify-center'>
            {error && (<div><p className='text-red-600 text-center uppercase font-bold mb-5 p-3 rounded-xl'>Todos los campos son obligatorios</p></div>)}
                <div className='w-[90%] md:w-1/2'>
                    <label htmlFor='nombre'>Nombre</label>
                    <input value={nombre} onChange={(e) => setNombre(e.target.value)} id='nombre' type='text' placeholder='ingrese el nombre' className='w-full pl-[20px]  mt-[10px] mb-[50px] rounded-xl py-[5px] shadow-md hover:shadow-xl'></input>
                </div>
                <div className='w-[90%] md:w-1/2'>
                    <label htmlFor='url'>URL de la imagen</label>
                    <input value={url} onChange={(e) => setUrl(e.target.value)} id='url' type='url' placeholder='ingrese el url' className='w-full pl-[20px]  mt-[10px] mb-[50px] rounded-xl py-[5px] shadow-md hover:shadow-xl'></input>
                </div>
                <Tipos/>
                <div className='w-[90%] md:w-1/2'>
                    <label htmlFor='descripcion'>Descripción</label>
                    <textarea value={descripcion} onChange={(e) => setDescripcion(e.target.value)} id='descripcion' placeholder='ingrese la descripcion' className='w-full pl-[20px]  mt-[10px] mb-[50px] rounded-xl py-[5px] shadow-md hover:shadow-xl'></textarea>
                </div>
                <div className='w-[90%] md:w-1/2'>
                    <label htmlFor='peso'>Peso</label>
                    <input value={peso} onChange={(e) => setPeso(e.target.value)} id='peso' type='number' placeholder='Ingrese el peso' className='w-full pl-[20px] mt-[10px] mb-[50px] rounded-xl py-[5px] shadow-md hover:shadow-xl'></input>
                </div>
                <div className='w-[90%] md:w-1/2'>
                    <label htmlFor='altura'>Altura</label>
                    <input value={altura} onChange={(e) => setAltura(e.target.value)} id='altura' type='number' placeholder='Ingrese la altura' className='w-full pl-[20px] mt-[10px] mb-[50px] rounded-xl py-[5px] shadow-md hover:shadow-xl'></input>
                </div>
                <div className='w-[90%] md:w-1/2'>
                    <label htmlFor='movimientos'>Movimientos</label>
                    <input value={movimientos} onChange={(e) => setMovimientos(e.target.value)} id='movimientos' type='text' placeholder='Movimiento 1' className='w-full pl-[20px] mt-[10px]  rounded-xl py-[5px] shadow-md hover:shadow-xl'></input>
                    <input value={movimientos} onChange={(e) => setMovimientos(e.target.value)} type='text' placeholder='Movimiento 2' className='w-full pl-[20px] mt-[10px] mb-[50px] rounded-xl py-[5px] shadow-md hover:shadow-xl'></input>
                </div>
                <div className='w-[90%] md:w-1/2'>
                    <label htmlFor='stats'>Stats</label>
                    <input value={hp} onChange={(e) => setHp(e.target.value)} id='stats' type='number' placeholder='HP' className='w-full pl-[20px] mt-[10px] rounded-xl py-[5px] shadow-md hover:shadow-xl'></input>
                    <input value={atk} onChange={(e) => setAtk(e.target.value)} type='number' placeholder='ATK' className='w-full pl-[20px] mt-[10px] rounded-xl py-[5px] shadow-md hover:shadow-xl'></input>
                    <input value={def} onChange={(e) => setDef(e.target.value)} type='number' placeholder='DEF' className='w-full pl-[20px] mt-[10px] rounded-xl py-[5px] shadow-md hover:shadow-xl'></input>
                    <input value={satk} onChange={(e) => setSatk(e.target.value)} type='number' placeholder='SATK' className='w-full pl-[20px] mt-[10px] rounded-xl py-[5px] shadow-md hover:shadow-xl'></input>
                    <input value={sdef} onChange={(e) => setSdef(e.target.value)} type='number' placeholder='SDEF' className='w-full pl-[20px] mt-[10px] rounded-xl py-[5px] shadow-md hover:shadow-xl'></input>
                    <input value={spd} onChange={(e) => setSpd(e.target.value)} type='number' placeholder='SPD' className='w-full pl-[20px] mt-[10px] mb-[50px] rounded-xl py-[5px] shadow-md hover:shadow-xl'></input>
                </div>
                <div className='flex justify-center'>
                    <button type='submit' className='bg-[#ffca2a] rounded-2xl mb-[100px] px-[10px] py-[5px] shadow-md hover:shadow-xl' value='Agregar Pokemon'>Agregar Pokemon</button>
                </div>
            </form>
        </div> 
    </div>
  )
}

export default AgregarPokemonForm

/* <input value={item} type="checkbox" onChange={handleCheck} /> */
