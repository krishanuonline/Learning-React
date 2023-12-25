import{ useState } from 'react'


function BgChanger() {
    const [color,setColor] = useState(null)
  return (
    <div className='h-screen w-full duration-300' style={{backgroundColor:color}}>
        <div className='flex flex-wrap gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-xl ' style={{backgroundColor:"red"}} onMouseOver={()=>setColor("red")}>Red</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-xl ' style={{backgroundColor:"green"}} onMouseOver={()=>setColor("green")} >Green</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-xl ' style={{backgroundColor:"blue"}} onMouseOver={()=>setColor("blue")}>Blue</button>

        </div>
    </div>
  )
}

export default BgChanger
