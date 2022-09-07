import { useEffect, useState } from "react"
import React from 'react'
import HeaderPokemon from './HeaderPokemon'

const Fondo = ({id}) => {

  const [selectedPokemonDetails, setSelectedPokemonDetails] = useState({datos_pokemon:
  {
    name: " "
  }})
  const [pokemonType, setPokemonType] = useState('')
  const [pokemonType2 , setPokemonType2] = useState ('')
  const [selectedPokemonText, setSelectedPokemonText] = useState('')
  const [pokemonTypes, setPokemonTypes] = useState([])
  const [selectedPokemonHP, setSelectedPokemonHP] = useState("")
  const [selectedPokemonATK, setSelectedPokemonATK] = useState("")
  const [selectedPokemonDEF, setSelectedPokemonDEF] = useState("")
  const [selectedPokemonSATK, setSelectedPokemonSATK] = useState("")
  const [selectedPokemonSDEF, setSelectedPokemonSDEF] = useState("")
  const [selectedPokemonSPD, setSelectedPokemonSPD] = useState("")
  const [pokemonId, setPokemonId] = useState("")

const getPokemonDetails = async () => {
  console.log('me ejecuto')
  await fetch(`http://localhost:4000/pokemon/${id}`, {mode:'cors' } ) 
  .then((res) =>  { return res.json()})
  .then((fetchedPokemon ) => {
    if(fetchedPokemon.datos_pokemon){
      setSelectedPokemonDetails(fetchedPokemon);
      setPokemonType(fetchedPokemon.types[0].name)
      setPokemonType2(fetchedPokemon.types[1]?.name)
      setPokemonTypes(fetchedPokemon.types)
      setSelectedPokemonHP(fetchedPokemon.datos_pokemon.hp)
      setSelectedPokemonATK(fetchedPokemon.datos_pokemon.atk)
      setSelectedPokemonDEF(fetchedPokemon.datos_pokemon.def)
      setSelectedPokemonSATK(fetchedPokemon.datos_pokemon.satk)
      setSelectedPokemonSDEF(fetchedPokemon.datos_pokemon.sdef)
      setSelectedPokemonSPD(fetchedPokemon.datos_pokemon.spd)
      setPokemonId(fetchedPokemon.datos_pokemon.id)
      setSelectedPokemonText(fetchedPokemon.datos_pokemon.description)
    } else {
      fetch(`http://localhost:4000/pokemon/firstpokemon`, {mode:'cors'}) 
      .then((res) =>  { return res.json()})
      .then((fetchedPokemon ) => {
        setSelectedPokemonDetails(fetchedPokemon);
      setPokemonType(fetchedPokemon.types[0].name)
      setPokemonType2(fetchedPokemon.types[1]?.name)
      setPokemonTypes(fetchedPokemon.types)
      setSelectedPokemonHP(fetchedPokemon.datos_pokemon.hp)
      setSelectedPokemonATK(fetchedPokemon.datos_pokemon.atk)
      setSelectedPokemonDEF(fetchedPokemon.datos_pokemon.def)
      setSelectedPokemonSATK(fetchedPokemon.datos_pokemon.satk)
      setSelectedPokemonSDEF(fetchedPokemon.datos_pokemon.sdef)
      setSelectedPokemonSPD(fetchedPokemon.datos_pokemon.spd)
      setPokemonId(fetchedPokemon.datos_pokemon.id)
      setSelectedPokemonText(fetchedPokemon.datos_pokemon.description)
      })
    }
      
  })
  .catch ((error) => {
      console.log(error)
  })
}




useEffect(() => {
  getPokemonDetails()
} , [id]);

console.log("fondo renderizado")
console.log(selectedPokemonDetails)
  return (
    <>
      <div className="h-auto w-auto"> 
          
        <HeaderPokemon 
        name={selectedPokemonDetails.datos_pokemon.name}
        pokemonTypes={pokemonTypes}
        pokemonType={pokemonType}
        pokemonType2={pokemonType2}
        id={selectedPokemonDetails.datos_pokemon.id}
        selectedPokemonDetails={selectedPokemonDetails}
        selectedPokemonText={selectedPokemonText}
        selectedPokemonHP={selectedPokemonHP}
        selectedPokemonDEF={selectedPokemonDEF}
        selectedPokemonATK={selectedPokemonATK}
        selectedPokemonSATK={selectedPokemonSATK}
        selectedPokemonSDEF={ selectedPokemonSDEF}
        selectedPokemonSPD={ selectedPokemonSPD}
        pokemonId={pokemonId}
        />

       

      </div> 
    </>
  )
}

export default Fondo