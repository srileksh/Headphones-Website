import React from 'react'

function Sec2() {
  return (
    <div className='  lg:mt-[30px] xl:mt-[50px] px-1 sm:px-5 bg-[#F5F5F5]'> 
        <h1 className='font-bold text-center text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#52483E]'>Your Style. Your Sound.</h1>
        <p className='text-[15px] sm:text-[20px]  lg:text-3xl text-center mt-[20px] text-[#8B8782]'> Studio-grade acoustics that dissolve distractions and awaken clarity.</p>
        <div className='flex justify-between items-center'>
          <img className='w-[80px] h-[100px] sm:w-[130px] sm:h-[200px] md:w-[150px] md:h-[200px] lg:w-[240px] lg:h-[380px] xl:w-[300px] xl:h-[450px]' src="headphones(yellow).png" alt="" />
          <img className='w-[160px] h-[160px] sm:w-[300px] sm:h-[300px] md:w-[340px] md:h-[340px] lg:w-[520px] lg:h-[520px] xl:w-[660px] xl:h-[660px]' src="Headphone Images.png" alt="" />
          <img className='w-[80px] h-[100px] sm:w-[130px] sm:h-[200px] md:w-[150px] md:h-[200px] lg:w-[240px] lg:h-[380px] xl:w-[300px] xl:h-[450px]'src="headphones(red).png" alt="" />
        </div>
        <div className='flex justify-center  gap-4'>
        <div className='border-0 rounded-[100%] w-[10px] h-[10px] sm:w-[30px] sm:h-[30px] md:w-[50px] md:h-[50px] lg:w-[80px] lg:h-[80px] xl:w-[100px] xl:h-[100px] bg-[#D8B74B]'></div>
        <div className='border-2 rounded-[100%] w-[10px] h-[10px] sm:w-[30px] sm:h-[30px] md:w-[50px] md:h-[50px] lg:w-[80px] lg:h-[80px] xl:w-[100px] xl:h-[100px] bg-[#94915B]'></div>
        <div className='border-0 rounded-[100%] w-[10px] h-[10px] sm:w-[30px] sm:h-[30px] md:w-[50px] md:h-[50px] lg:w-[80px] lg:h-[80px] xl:w-[100px] xl:h-[100px] bg-[#883D39]'></div>
        </div>
        <p className='text-center text-[#8B8782] text-[15px]  sm:text-[20px] lg:text-3xl mt-[30px]'>Choose a color that fits your flow.</p>
    </div>
  )
}

export default Sec2