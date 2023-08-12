import React, { useState } from 'react';
import ColorThemes from './ColorThemes'
import Values from 'values.js'
function Home() {
  const [list, setList] = useState(new Values('#A020F0').all(10));
  const [color, setColor] = useState('');
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    try{
      let colors = new Values(color).all(10);
      setList(colors);
    }catch(err){
    alert("Enter a valid color code like '#FF5733'.")
    }
  }
  return (
  <>
    <section className='container'>
        <h3>Color Generator App</h3>

        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='#A020F0' onChange={(e)=>setColor(e.target.value)}/>
            <button className='btn'>Search</button>
        </form>
    </section>
    <section className='colors'>
      {
        list.map((color,i)=>(
          <ColorThemes
          key={i}
          {...color}
          index={i}
          hexColor={color.hex}
          />
        ))
      }
    </section>
  </>
  )
}

export default Home