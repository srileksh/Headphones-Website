import React from 'react'

function Sec3() {
  return (
    <div className='px-3.5 flex overflow-x-scroll gap-2 bg-[#F5F5F5] '>
    <div className=' min-w-[350px] sm:w-full xl:w-[1080px] xl:h-[480px] bg-gradient-to-b from-[#D2CDC6] to-[#F8BF93] mt-[80px] rounded-3xl flex sm:flex-row flex-col'>
        <div className='sm:w-[50%] py-[30px] sm:py-0 px-[50px] lg:px-[80px] text-[24px] lg:text-[30px] xl:text-[32px] font-semibold flex  items-center'>
            <p>Deep lows. Lush mids. Airy highs. All perfectly in balance.</p>
        </div>
        <div className='sm:w-[50%]'>
            <img src="Headphone Model.png" alt="" />
        </div>

    </div>
        <div className='min-w-[350px] sm:w-full xl:w-[1080px] xl:h-[480px] bg-gradient-to-b from-[#D2CDC6] to-[#F8BF93] mt-[80px] rounded-3xl flex sm:flex-row flex-col sm:hidden'>
        <div className='sm:w-[50%] py-[30px] sm:py-0 px-[50px] lg:px-[80px] text-[24px] lg:text-[30px] xl:text-[32px] font-semibold flex  items-center'>
            <p>Deep lows. Lush mids. Airy highs. All perfectly in balance.</p>
        </div>
        <div className='sm:w-[50%]'>
            <img src="Headphone Model.png" alt="" />
        </div>

    </div>

    </div>
  )
}

export default Sec3