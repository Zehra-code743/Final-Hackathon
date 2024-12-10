import React from 'react'
import Image from 'next/image'

const Company = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 p-0 w-full mt-[50px] ml-8">
      {/* First Logo */}
      <div className="flex justify-center">
        <Image src="/Logo1.png" alt="Logo 1" width={85} height={87} />
      </div>

      {/* Second Logo */}
      <div className="flex justify-center">
        <Image src="/Logo2.png" alt="Logo 2" width={135} height={139} />
      </div>

      {/* Third Logo */}
      <div className="flex justify-center">
        <Image src="/Logo3.png" alt="Logo 3" width={63} height={65} />
      </div>

      {/* Fourth Logo */}
      <div className="flex justify-center">
        <Image src="/Logo 4.png" alt="Logo 4" width={98} height={101} />
      </div>

      {/* Fifth Logo */}
      <div className="flex justify-center">
        <Image src="/Logo5.png" alt="Logo 5" width={113} height={115} />
      </div>

      {/* Sixth Logo */}
      <div className="flex justify-center">
        <Image src="/Logo7.png" alt="Logo 6" width={84} height={87} />
      </div>
    </div>
  )
}

export default Company
