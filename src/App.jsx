import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import './App.css'
import Inicio from './paginas/Inicio'
import Details from './paginas/Details'
import "@fontsource/poppins";
import Pokedex from './paginas/Pokedex'
import AgregarPokemon from './paginas/AgregarPokemon'

function App() {


  return (
    <div className='w-full letra  m-auto h-full'>
   <BrowserRouter>
    <Routes>
      <Route 
       path='/'
       element={<Inicio 
       
       />}
      />
      <Route 
       path='Pokedex'
       element={<Pokedex 
       
       />}
      />
      <Route 
       path='/Details/:id'
       element={<Details
       
       />}
      />
      <Route 
       path='/AgregarPokemon'
       element={<AgregarPokemon
       
       />}
      />
    </Routes>
   </BrowserRouter>
   </div>
  )
}

export default App
