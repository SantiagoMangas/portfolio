import React from 'react'

const Division = () => {
  return (
    <div className='relative overflow-hidden bg-white py-16 md:py-24 lg:py-32'>
      <div className="absolute bottom-0 right-0 -mb-24 -mr-24 w-80 h-60 rounded-full bg-[#73BBA3]/40 blur-3xl pointer-events-none"></div>

      <div className="absolute top-0 left-0 -mt-24 -ml-24 w-80 h-60 rounded-full bg-[#F0A04B]/30 blur-3xl pointer-events-none"></div>
      <div className="relative w-full">
        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#000000]/20 to-transparent"></div>
      </div>
    </div>
  )
}

export default Division