// import React, { useState } from 'react'
// import axios from 'axios';
// import { useEffect } from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


const Random = () => {


  const {gif, loading, fetchData} = useGif();


  return (
    <div className='lg:w-1/2 w-full bg-white		 rounded-xl border border-white shadow-lg
    flex flex-col items-center gap-y-5 mt-[15px]'>

      <h1 className='mt-[15px] text-xl md:text-2xl underline uppercase font-bold  text-black'> A Random Gif</h1>

    {
        loading ? (<Spinner/>) : (<img src= {gif} width="450"  alt='gif'/>)
    }

      

      <button onClick={() => fetchData()}
      className="w-10/12 bg-violet-400 hover:bg-violet-500 transition-all duration-200
        cursor-pointer text-white text-xl py-2 rounded-lg mb-[20px] uppercase  font-medium tracking-wide">

       Generate

      </button>

    </div>
  )
}

export default Random