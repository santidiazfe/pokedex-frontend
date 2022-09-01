import {useState, useEffect} from 'react'

const Tipos = () => {
  const [tipo, setTipo] = useState([])
  const [tipoSeleccionado, setTipoSeleccionado] = useState([]);


  const handleSelect = (e) =>{
    setTipoSeleccionado(e.target.value)
    
  }
  console.log(handleSelect, 'handle')
  console.log(tipoSeleccionado, 'tiposelect')
  const getTypes = async () =>{
    await fetch('http://localhost:4000/types', {mode: 'cors'})
    .then((response) => response.json())
    .then((resultado) => {
      setTipo(resultado)
      console.log(resultado)
    }) 
  }
   useEffect(() =>{
    getTypes();
  },[])
 
  
  //fetch base de datos, mapear array, por cada elemento mostrar un input de tipo checkbox, value es ID , 
  return (
    <div className='w-1/2 flex flex-col'>
        <label>Tipos</label>
        <div className='flex my-[50px] justify-center flex-col w-full p-[20px] bg-white rounded-xl shadow-md hover:shadow-xl'>
          {tipo.length > 0 ?   tipo.map((tipo,index) => (
              <div key={index}>
                <input value={tipo.id} onChange={handleSelect} type='checkbox'/>{tipo.name}
              </div>
            )): null }
        </div>
    </div>
  )
}

export default Tipos