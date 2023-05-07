import { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

import './App.css'

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#FF8235").all(10));


  const handleSubmit = (e)=>{
    e.preventDefault();

    try {
      let colors = new Values(color).all(10);
      console.log(colors);
      setList(colors);
      setError(false);
      
    } catch (error) {
      console.log(error);
      setError(true); 
    }

  }

  return (
    <>
      
   <section className='container'>
    <h3>
      Color Generator
    </h3>
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder='#f15025' value={color} onChange={(e)=>{setColor(e.target.value)}} className={`${error ? "error" : null
    }`}/>
      <button type='submit' className='btn'>Generate</button>
    </form>

</section>
<section className='colors'>
    <h4>{list.map((color,index)=>{
      return <SingleColor
        key={index}
        {...color}
        index = {index}
      />

    })}</h4>
</section>
  </>
  )
}

export default App
