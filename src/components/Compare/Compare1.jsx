import React from 'react'

function Compare1() {
  return (
    <div className='text-center bg-[#D2CDC6] px-2 sm:px-4 md:px-20 py-4 sm:py-15'>
        <h1 className='text-[25px] sm:text-[35px] md:text-[45px] lg:text-[56px] font-bold text-[#52483E]'>Compare Resonance models</h1>
        <p className='text-[#8B8782]'>Get help choosing. Chat with a Specialist.</p>
        <div className='flex gap-[4px] sm:gap-[20px] mt-8'>
            <div className='flex flex-col bg-[#FFFFFF] gap-[20px] w-[50%] rounded-2xl p-3 md:p-5'>
                <div className=' bg-[#D2CDC6] rounded-2xl py-[30px]'>
                    <h1 className='text-[25px] sm:text-[40px] font-semibold'>Aura Pro II</h1>
                    <img src="Headphone Images.png" alt="" />
                    <p>Starting at $320</p>
                    <button className='bg-gradient-to-b from-[#52483E] to-[#8B8782] text-white rounded-2xl px-4 py-2 mt-[10px]'>Buy Now</button>
                </div>
                <div className='mt-[30px]'>
                    <div className=' text-center'>
                        <img className='mx-auto' src="Cpu.png" alt="" />
                        <p className='text-[18px] text-[#666666] mt-[10px]'>R2 Chip</p>
                    </div>
                    <div className=' text-center'>
                        <img className='mx-auto mt-[20px]' src="SpeakerSimpleSlash.png" alt="" />
                        <p className='text-[18px] text-[#666666] mt-[10px]'>Active Noice Cancellation</p>
                    </div>
                    <div className=' text-center'>
                        <img className='mx-auto mt-[20px]' src="UserSound.png" alt="" />
                        <p className='text-[18px] text-[#666666] mt-[10px]'>Personalized Spatial Audio</p>
                    </div>

                    <div className=' text-center'>
                        <img className='mx-auto mt-[20px]' src="Minus.png" alt="" />
                        <p className='text-[18px] text-[#666666] mt-[10px]'>None</p>
                    </div>
                    <div className=' text-center'>
                        <img className='mx-auto mt-[20px]' src="Ear" alt="" />
                        <p className='text-[18px] text-[#666666] mt-[10px]'>Hearing Test and Hearing Protection</p>
                    </div>
                    <div className=' text-center'>
                        <img className='mx-auto mt-[20px]' src="HandTap.png" alt="" />
                        <p className='text-[18px] text-[#666666] mt-[10px]'>Touch sensor</p>
                    </div>
                    <div className=' text-center'>
                        <img className='mx-auto mt-[20px]' src="BatteryCharging.png" alt="" />
                        <p className='text-[18px] text-[#666666] mt-[10px]'>Up to 6 hours of listerning</p>
                    </div>

                    <div className=' text-center'>
                        <img className='mx-auto mt-[20px]' src="Drop.png" alt="" />
                        <p className='text-[18px] text-[#666666] mt-[10px]'>Water resistant</p>
                    </div>
                    <div className=' text-center'>
                        <img className='mx-auto mt-[20px]' src="Microphone.png" alt="" />
                        <p className='text-[18px] text-[#666666] mt-[10px]'>Dual beamforming microphones</p>
                    </div>
                </div>

            </div>

            <div className=' bg-[#FFFFFF] w-[50%] rounded-2xl p-3 md:p-5 '>
                <div className='bg-[#D2CDC6] rounded-2xl py-[30px]'>
                    <h1 className='text-[25px] sm:text-[40px] font-semibold'>  Flow II</h1>
                    <img className='w-[100%]' src="headphones(green) 1 (1).png" alt="" />
                    <p>Starting at $160</p> 
                    <button className='bg-gradient-to-b from-[#52483E] to-[#8B8782] text-white rounded-2xl px-4 py-2 mt-[10px]'>Buy Now</button>
                </div>
                <div className='mt-[30px]'>
                    <div className=' text-center'>
                        <img className='mx-auto' src="Cpu.png" alt="" />
                        <p className='text-[18px] text-[#666666] mt-[10px]'>R1 Chip</p>
                        <p  className='text-[18px] text-[#666666] mt-[15px]'>2x more Active Noise Cancellation</p>
                    </div>
                    <div className=' text-center'>
                        <img className='mx-auto mt-[20px]' src="UserSound.png" alt="" />
                        <p className='text-[18px] text-[#666666] mt-[10px]'>Personalized Spatial Audio</p>
                    </div>
                    <div className=' text-center'>
                        <img className='mx-auto mt-[20px]' src="Equalizer.png" alt="" />
                        <p className='text-[18px] text-[#666666] mt-[10px]'>Lossless Audio</p>
                    </div>
                    <div className=' text-center'>
                        <img className='mx-auto mt-[20px]' src="Minus.png" alt="" />
                        <p className='text-[18px] text-[#666666] mt-[10px]'>None</p>
                    </div>
                    <div className=' text-center'>
                        <img className='mx-auto mt-[20px]' src="Minus.png" alt="" />
                        <p className='text-[18px] text-[#666666] mt-[10px]'>None</p>
                    </div>
                    <div className=' text-center'>
                        <img className='mx-auto mt-[20px]' src="BatteryCharging.png" alt="" />
                        <p className='text-[18px] text-[#666666] mt-[10px]'>Up to 17 hours of listening</p>
                    </div>
                    <div className=' text-center'>
                        <img className='mx-auto mt-[20px]' src="Minus.png" alt="" />
                        <p className='text-[18px] text-[#666666] mt-[10px]'>None</p>
                    </div>

                    <div className=' text-center'>
                        <img className='mx-auto mt-[20px]' src="Microphone.png" alt="" />
                        <p className='text-[18px] text-[#666666] mt-[10px]'>5 microphones total</p>
                    </div>




                </div>
            </div>

        </div>
    </div>
  )
}

export default Compare1