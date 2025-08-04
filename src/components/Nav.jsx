import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className='flex justify-between items-center px-3.5 sm:px-5 py-1.5 sm:py-3 bg-[#D2CDC6]'>
      {/* px-1 py-1.5 sm:px-5 sm:py-3 */}
        <div className='flex items-center'>
        <img className='w-[30px] h-[30px] sm:w-[40px] sm:h-[40px]' src="Waveform.png" alt="" />
        <h2 className='text-[#52483E] text-[15px] sm:text-2xl font-semibold'>Resonance</h2>
        </div>
        <div className='flex gap-7 sm:gap-10 md:gap-15 lg:gap-20 items-center'>
        <Link to="/"><p className='text-[#52483E] text-[12px] sm:text-[20px]'>Home</p></Link>   
             <Link to="techspecs"><p className='text-[#52483E] text-[12px] sm:text-[20px]'>Tech Specs</p></Link>
        <Link to="compare"><button className='border-1 px-1.5 py-0 sm:px-3 sm:py-1 rounded-2xl text-white bg-[#52483E] text-[12px] sm:text-[20px]'>Compare</button></Link>
        </div>
    </div>
  )
}

export default Nav