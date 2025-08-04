import React from 'react'

function Sec1() {
    return (
        <div className='w-full px-1 sm:px-5 bg-gradient-to-b from-[#D2CDC6] to-[#F5F5F5]'>
            <div className='w-full h-[400px] sm:h-[600px] md:h-[800px] lg:h-[1000px] relative'>
                
            <div className='w-full h-full absolute pt-[125px] sm:pt-80 md:pt-85 lg:pt-[350px] '>
                <p className='text-[50px] sm:text-[90px] md:text-[100px] lg:text-[150px] xl:text-[200px] font-bold text-[#BAA87B] text-center'>Aura Pro II</p>
            </div>
            <div className='w-full h-full absolute'>
            <img className='h-[400px] sm:h-auto sm:pt-[10px] mx-auto' src="Headphone Image.png " alt="" />

            </div>
            <div className='w-full h-full absolute pt-[50px] sm:pt-50 lg:pt-[100px]'>
            <p className='text-[60px] sm:text-[110px] md:text-[130px] lg:text-[180px] xl:text-[250px] font-bold text-[#52483E] text-center'>Resonance</p>
            </div>
            </div>
        </div>
            )
}

export default Sec1