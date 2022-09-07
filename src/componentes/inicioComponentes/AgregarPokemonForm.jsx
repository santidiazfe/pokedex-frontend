import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AgregarPokemonForm = () => {
  
  const navegar = useNavigate();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [move, setMove] = useState("");
  const [moveTwo, setMoveTwo] = useState("");
  const [move_id1, setMove_id1] = useState(0);
  const [move_id2, setMove_id2] = useState(0);
  const [hp, setHp] = useState(0);
  const [atk, setAtk] = useState(0);
  const [def, setDef] = useState(0);
  const [satk, setSatk] = useState(0);
  const [sdef, setSdef] = useState(0);
  const [spd, setSpd] = useState(0);
  const [types_id1, setType_id1] = useState(0);
  const [types_id2, setType_id2] = useState(0);
  const [typeName1, setTypeName1] = useState('');
  const [typeName2, setTypeName2] = useState('');

   
  const form = async () => {
    try {
      const res = await fetch("http://localhost:4000/Pokemon", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("jwt"),
        },
        body: JSON.stringify({
          pokemon: {
            name: name,
            height: height,
            weight: weight,
            description: description,
            image: image,
            hp: hp,
            atk: atk,
            def: def,
            satk: satk,
            sdef: sdef,
            spd: spd,
            type: typeName1
        },
        moves: [
            {   moves_id:move_id1,
                name: move
            },
            {   moves_id:move_id2,
                name: moveTwo
            }
        ],
        types: [
            {   types_id:types_id1,
                name: typeName1
            },
            {   types_id:types_id2,
                name: typeName2
            }
        ]
        })
      });
      if (!res.ok) {
        throw new Error("invalid data ");
      }
      
    } catch (error) {
      console.log("Error");
      alert("Todos los datos son obligatorios");
    }
    }



  const onClick = (e) => {
    form();
  };
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeImage = (e) => {
    setImage(e.target.value);
  };
  const onChangeType1 = (e) => {
    setType_id1(e.target.value);
    setTypeName1(e.target.name);
  };
  const onChangeType2 = (e) => {
    setType_id2(e.target.value);
    setTypeName2(e.target.name);
  };
  const onChangeWeight = (e) => {
    setWeight(e.target.value);
  };
  const onChangeHeight = (e) => {
    setHeight(e.target.value);
  };
  const onChangeMove = (e) => {
    setMove(e.target.name);
    setMove_id1(e.target.value);
    
  };
  const onChangeMoveTwo = (e) => {
    setMoveTwo(e.target.name);
    setMove_id2(e.target.value);
  };
  const onChangeHp = (e) => {
    setHp(e.target.value);
  };
  const onChangeAtk = (e) => {
    setAtk(e.target.value);
  };
  const onChangeDef = (e) => {
    setDef(e.target.value);
  };
  const onChangeSatk = (e) => {
    setSatk(e.target.value);
  };
  const onChangeSdef = (e) => {
    setSdef(e.target.value);
  };
  const onChangeSpd = (e) => {
    setSpd(e.target.value);
  };
  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  }
  
  
  
  return (
    <form onSubmit={form} className='w-full bg-[#ffca2a] h-full pt-[50px]'>
      <div className='flex w-4/5 md:w-1/3 h-full m-auto  border-black border-[0.1px] flex-col bg-[#F7F7F7] rounded-xl p-10 md:hover:shadow-2xl'>
        <div className='flex items-center'>
          <Link to={`/Pokedex `}>        
            <i className="fa-solid flex  text-[25px] fa-arrow-left mr-[20px]"></i>
          </Link>
          <p>Regresar</p>
        </div>
      <h1 className='text-[30px] md:text-[40px] my-[50px] text-center'>Agregar Pokémon</h1>
        <div className="mt-[2vh]" >
          <label className="font-bold">Ingresa su nombre</label>
          <input placeholder='Nombre' className='w-full md:w-[500px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[50px] rounded-xl py-[5px] shadow-md hover:shadow-xl' type="text" name="name" id="name" value={name} onChange={onChangeName}/>
        </div>
        <div className="mt-[2vh]" >
          <label className="font-bold">Ingresa el URL de la imagen</label>
          <input placeholder='URL' className='w-full md:w-[500px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[50px] rounded-xl py-[5px] shadow-md hover:shadow-xl' type="url" name="image" id="image" value={image} onChange={onChangeImage}/>
        </div>
        <div className="mt-[2vh]" >
          <label className="font-bold">Ingresa sus tipos</label>
          <br/>
          <select defaultValue={0} id="tipos" onChange={onChangeType1}  className='w-full md:w-[500px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[50px] rounded-xl py-[5px] shadow-md hover:shadow-xl'>
          <option value={0}>Selecciona su tipo principal</option>
             <option value={1} name='water'>Agua</option>
             <option value={2} name='fire'>Fire</option>
             <option value={3} name='grass'>Grass</option>
             <option value={4} name='posion'>Poison</option>
             <option value={5} name='ghost'>Ghost</option>
             <option value={6} name='electric'>Electric</option>
             <option value={7} name='bug'>Bug</option>
             <option value={8} name='flying'>Flying</option>
             <option value={9} name='normal'>Normal</option>
             <option value={10} name='psychic'>Psychic</option>
             <option value={11} name='steel'>Steel</option>
             <option value={12} name='rock'>Rock</option>
             <option value={13} name='dark'>Dark</option>
             <option value={14} name='ground'>Ground</option>
             <option value={15} name='dragon'>Dragon</option>
             <option value={16} name='fairy'>Fairy</option>
             <option value={17} name='fighting'>Fighting</option>
             <option value={18} name='ice'>Ice</option>
          </select>
          <select defaultValue={19} id="tipos" onChange={onChangeType2} className='w-full md:w-[500px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[50px] rounded-xl py-[5px] shadow-md hover:shadow-xl'>
             <option disabled >Selecciona su tipo secundario (si tiene)</option>
             <option value={1} name='water'>Agua</option>
             <option value={2} name='fire'>Fire</option>
             <option value={3} name='grass'>Grass</option>
             <option value={4} name='posion'>Poison</option>
             <option value={5} name='ghost'>Ghost</option>
             <option value={6} name='electric'>Electric</option>
             <option value={7} name='bug'>Bug</option>
             <option value={8} name='flying'>Flying</option>
             <option value={9} name='normal'>Normal</option>
             <option value={10} name='psychic'>Psychic</option>
             <option value={11} name='steel'>Steel</option>
             <option value={12} name='rock'>Rock</option>
             <option value={13} name='dark'>Dark</option>
             <option value={14} name='ground'>Ground</option>
             <option value={15} name='dragon'>Dragon</option>
             <option value={16} name='fairy'>Fairy</option>
             <option value={17} name='fighting'>Fighting</option>
             <option value={18} name='ice'>Ice</option>
             <option value={19} name='notienetipo'>No tiene tipo secundario</option>
          </select>
        </div>
        <div className="mt-[2vh]" >
          <label className="font-bold">Ingresa su descripcion</label>
          <textarea placeholder='Descripcion' className='w-full md:w-[500px] md:h-[100px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[50px] rounded-xl py-[5px] shadow-md hover:shadow-xl' type="text" name="info" id="descripcion" value={description} onChange={onChangeDescription}
          />
        </div>
        <div className="mt-[1vh]" >
          <label className="font-bold">Ingresa su peso y altura</label>
          <br/>
          <input placeholder='Peso' className='w-full md:w-[500px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[50px] rounded-xl py-[5px] shadow-md hover:shadow-xl'
            type="text"
            name="weight"
            id="weight"
            value={weight}
            onChange={onChangeWeight}
          />
          <input placeholder='Altura' className='w-full md:w-[500px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[50px] rounded-xl py-[5px] shadow-md hover:shadow-xl'
            type="text"
            name="height"
            id="height"
            value={height}
            onChange={onChangeHeight}
          />
        </div>
        <div className="mt-[2vh]" >
          <div className="mt-[2vh]" >
          <label className="font-bold">Ingresa sus movimientos</label>
          <select defaultValue={0} id="movimientos" onChange={onChangeMove}  className='w-full md:w-[500px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[50px] rounded-xl py-[5px] shadow-md hover:shadow-xl'>
          <option value={0}>Selecciona su primer movimiento</option>
             <option value={1} name='razor-wind'>Razor-Wind</option>
             <option value={2} name='sword-dance'>Sword-Dance</option>
             <option value={3} name='mega-punch'>Mega-Punch</option>
             <option value={4} name='fire-punch'>Fire-Punch</option>
             <option value={5} name='ice-punch'>Ice-Punch</option>
             <option value={6} name='tackle'>Tackle</option>
             <option value={7} name='string-shot'>String-Shot</option>
             <option value={8} name='harden'>Harden</option>
             <option value={9} name='gust'>Gust</option>
             <option value={10} name='poison-sting'>Poison-Sting</option>
             <option value={11} name='headbutt'>Headbutt</option>
             <option value={12} name='whirlwind'>Whirlwind</option>
             <option value={13} name='bind'>Bind</option>
             <option value={14} name='siam'>Siam</option>
             <option value={15} name='pay-day'>Pay-Day</option>
             <option value={16} name='cut'>Cut</option>
             <option value={17} name='scratch'>Scratch</option>
          </select>
          <select defaultValue={0} id="movimientos" onChange={onChangeMoveTwo}  className='w-full md:w-[500px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[50px] rounded-xl py-[5px] shadow-md hover:shadow-xl'>
          <option value={0}>Selecciona su segundo movimiento</option>
             <option value={1} name='razor-wind'>Razor-Wind</option>
             <option value={2} name='sword-dance'>Sword-Dance</option>
             <option value={3} name='mega-punch'>Mega-Punch</option>
             <option value={4} name='fire-punch'>Fire-Punch</option>
             <option value={5} name='ice-punch'>Ice-Punch</option>
             <option value={6} name='tackle'>Tackle</option>
             <option value={7} name='string-shot'>String-Shot</option>
             <option value={8} name='harden'>Harden</option>
             <option value={9} name='gust'>Gust</option>
             <option value={10} name='poison-sting'>Poison-Sting</option>
             <option value={11} name='headbutt'>Headbutt</option>
             <option value={12} name='whirlwind'>Whirlwind</option>
             <option value={13} name='bind'>Bind</option>
             <option value={14} name='siam'>Siam</option>
             <option value={15} name='pay-day'>Pay-Day</option>
             <option value={16} name='cut'>Cut</option>
             <option value={17} name='scratch'>Scratch</option>
          </select>
        </div>
         
      </div>
          <label className="font-bold">Ingresa sus stats</label>
        <div className="flex flex-col justify-center items-center" >
          <div className="flex flex-row">
            <input placeholder='HP' className='w-full md:w-[200px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[50px] rounded-xl py-[5px] shadow-md hover:shadow-xl'
              type="number"
              name="baseStats"
              id="HP"
              value={hp}
              onChange={onChangeHp}
            />
            <input className='w-full md:w-[200px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[50px] rounded-xl py-[5px] shadow-md hover:shadow-xl'
              type="number"
              name="baseStats"
              id="ATK"
              placeholder="ATK"
              value={atk}
              onChange={onChangeAtk}
            />
            <input className='w-full md:w-[200px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[50px] rounded-xl py-[5px] shadow-md hover:shadow-xl'
              type="text"
              name="baseStats"
              id="DEF"
              placeholder="DEF"
              value={def}
              onChange={onChangeDef}
            />
          </div>
          <div className="flex flex-row">
          <input className='w-full md:w-[200px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[50px] rounded-xl py-[5px] shadow-md hover:shadow-xl'
            type="number"
            name="baseStats"
            id="SATK"
            placeholder="SATK"
            value={satk}
            onChange={onChangeSatk}
          />
          <input className='w-full md:w-[200px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[50px] rounded-xl py-[5px] shadow-md hover:shadow-xl'
            type="number"
            name="baseStats"
            id="SDEF"
            placeholder="SDEF"
            value={sdef}
            onChange={onChangeSdef}
          />
          <input className='w-full md:w-[200px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[50px] rounded-xl py-[5px] shadow-md hover:shadow-xl'
            type="number"
            name="baseStats"
            id="SPD"
            placeholder="SPD"
            value={spd}
            onChange={onChangeSpd}
          />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button onClick={onClick} className='bg-[#ffca2a] rounded-2xl px-5 py-[5px] shadow-md hover:shadow-xl'>Agregar Pokémon</button>
        </div>
      </div>
    </form>
  );
};

export default AgregarPokemonForm