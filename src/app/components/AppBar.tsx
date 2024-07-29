import React, { FC } from 'react'

const AppBar:FC = () => {
  return (
    <div className="flex items-center justify-between p-2 shadow-lg text-neutral-content border border-red-500 border-solid m-8">
      <h1 className='font-bold text-3xl md:text-4xl text-blue-500'>
        Bond<span className='text-white text-5xl'>X</span>
      </h1>
        
      <div className='flex items-center justify-between w-[500px] text-xl max-lg:hidden font-semibold text-center'>
        <a>Home</a>
        <a>Swap</a>
        <a>Shill</a>
        <a>Create Token</a>
        <a>Trade</a>
      </div>

      <button className='bg-blue-500 rounded-tr-xl rounded-bl-xl py-2 px-8 border border-blue-500 md:block text-white rounded-sm '>Connect Wallet</button>      
    </div>
  )
}

export default AppBar