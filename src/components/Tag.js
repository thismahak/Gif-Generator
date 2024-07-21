import React, { useState } from 'react'
// import axios from 'axios';
// import { useEffect } from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


const Tag = () => {
  const [tag, setTag] = useState('car');

  const {gif, loading, fetchData} = useGif();


  return (
    <div className='lg:w-1/2 w-full bg-white	 rounded-xl border border-white shadow-lg
    flex flex-col items-center gap-y-5 mt-[15px]'>

      <h1 className=' text-black mt-[15px] text-xl md:text-2xl underline uppercase font-bold'> Random {tag} Gif</h1>

    {
        loading ? (<Spinner/>) : (<img src= {gif} width="450" alt='gif' />)
    }

      <input 
        className=' bg-violet-400 w-10/12 text-xl text-white font-bold py-2 rounded-lg mb-[3px] text-center'
        onChange={(event) =>  setTag(event.target.value)}
        value={tag}
      />
      

      <button onClick={() => fetchData(tag)}
      className="w-10/12 bg-violet-400 hover:bg-violet-500 transition-all duration-200
        cursor-pointer text-white text-xl  py-2 rounded-lg mb-[20px] uppercase font-medium tracking-wide">

       Generate

      </button>

    </div>
  )
}

export default Tag