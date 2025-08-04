import React from 'react'

function Footer() {
  return (
    <div className='text-center py-[50px] bg-gradient-to-b from-[#F5F5F5] to-[#D2CDC6]'>
        <div>
        <h1 className='text-[25px] sm:text-[42px] font-bold text-[#52483E]'>Sound. Presence. Purpose.</h1>
        <p className='text-[#8B8782] text-[15px] xl:text-[20px]'>Focused on crafting immersive audio experiences.</p>
<p className='text-[#8B8782] text-[15px] xl:text-[20px]'>We believe sound should not just be heard—it should move you.</p>
</div>
<div className='flex  justify-center items-center gap-[20px] mt-[20px]'>
    <button className='border-1 px-5 py-1 rounded-2xl'>Aura Pro II</button>
    <button className='border-1 px-5 py-1 rounded-2xl'>Flow II</button>
</div>
<div className='flex sm:flex-row flex-col justify-end gap-[10px] sm:gap-[20px] border-t-1 border-[#8B8782] mt-[50px]'>
    <div>
    <h1 className='text-[#8B8782] text-[15px] xl:text-[20px] mt-[10px]'>© 2025 Resonance. All rights reserved.</h1>
    </div>
    <div className='flex items-center justify-center'>
    <img className='mt-[10px] ' src="DiscordLogo.png" alt="" />
    <img className='mt-[10px] ' src="XLogo.png" alt="" />
    <img className='mt-[10px] ' src="MetaLogo.png" alt="" />
    </div>
</div>
    </div>
  )
}

export default Footer