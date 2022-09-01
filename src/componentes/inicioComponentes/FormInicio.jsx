import { useState } from "react";
import { useNavigate } from "react-router-dom";

function FormInicio() {


  const navegar = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const verify = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:4000/register/login", {
        method: "POST",
        body: JSON.stringify({ name, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error("invalid User data ");
      }
      const userFetch = await res.json();
      localStorage.setItem("token", userFetch.token);
      navegar("/Pokedex");
    } catch (error) {
      console.log("Error");
      alert("Usuario no registrado");
    }
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };


  return (
    <form action="" onSubmit={verify}>
      <div className="input-container w-[90%] md:w-1/2 flex flex-col justify-center">
        <label>¿Cuál es su usuario?</label>
        <input type="text" onChange={handleName} placeholder='ingrese su usuario' className='w-full md:w-[500px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[50px] rounded-xl py-[5px] shadow-md hover:shadow-xl' required />
      </div>
      <div className="input-container w-[90%] md:w-1/2 flex flex-col justify-center">
        <label>¿Cuál es su contraseña?</label>
        <input type="password" onChange={handlePassword} placeholder='ingrese su contraseña' className='w-full md:w-[500px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[50px] rounded-xl py-[5px] shadow-md hover:shadow-xl' required />
      </div>
      <div className="button-container flex justify-center">
        <button type="submit" onClick={verify} className='bg-[#ffca2a] rounded-2xl w-[100px] py-[5px] shadow-md hover:shadow-xl'>Ingresar</button>
      </div>
      <hr className='my-[50px]'/>
    </form>
  );
}

export default FormInicio
   





   
   
   
   
    // <div className='md:w-1/2 w-[390px] h-screen bg-white flex flex-col items-center justify-center'>
    //       <img className='md:hidden w-[60%] mb-[50px]' src='https://tec.com.pe/wp-content/uploads/2021/02/ddew4m7-c69a2c41-518f-48ca-ba35-8ab1895464e0.png' />
    //       <h1 className='text-[30px] md:text-[40px] mb-[50px] text-center'>Inicia Sesión</h1>
    //       <div className='flex flex-col w-[80%] md:w-full items-center justify-center'>
    //         <div className='w-[90%] md:w-1/2'>
    //           <hr className='mb-[50px]'/>
    //           <p>¿Cuál es su nombre?</p>
    //           <input type='text' onChange={(e) => {setName(e.target.value)}} placeholder='ingrese su nombre' className='w-full md:w-[500px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[50px] rounded-xl py-[5px] shadow-md hover:shadow-xl'></input>
    //         </div>
    //         <div className='w-[90%] md:w-1/2'>
    //           <p>¿Cuál es su contraseña?</p>
    //           <input type='password' onChange={(e) => {setPassword(e.target.value)}} placeholder='Ingrese su contraseña' className='w-full md:w-[500px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[50px] rounded-xl py-[5px] shadow-md hover:shadow-xl'></input>
    //         <div className='flex justify-center'>
    //           <button className='bg-[#ffca2a] rounded-2xl w-[100px] py-[5px] shadow-md hover:shadow-xl' onClick={() => login()}>Ingresar</button> 
              
    //           {/* OnClick - fetch que ejecuta la api con un post (crear objecto que se llene con input user y contra, booleano. Se pasa entre componentes el boton de agregar) */}

    //         </div>
    //           <hr className='my-[50px]'/>
    //         </div>
    //       </div>
    // </div>
 
