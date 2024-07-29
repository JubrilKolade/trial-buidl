import React from 'react'

const LandingPage = () => {
  return (
    <main className='m-8 p-2 '>
        <h1 className='text-center text-2xl md:text-[34px] mb-20'>A decentralized platform <br />for creating, managing and trading tokenized bonds.</h1>

        <div className='flex items-center justify-between'>
          <div className='w-[50%]'>
            <div className='relative top-[-300px]'>
              <div className='absolute bg-blue-500 h-[200px] w-[200px] top-24 left-24'>
              <div className='absolute bg-red-500 h-[200px] w-[200px] top-[-14px] left-[-14px]'></div>
              </div>
              <div className='absolute bg-blue-500 h-[200px] w-[200px] top-52 left-52'>
              <div className='absolute bg-red-500 h-[200px] w-[200px] top-[-14px] left-[-14px]'></div>
              </div>
              <div className='absolute bg-blue-500 h-[200px] w-[200px] top-80 left-80'>
              <div className='absolute bg-red-500 h-[200px] w-[200px] top-[-14px] left-[-14px]'></div>
              </div>
            </div>
          </div>
          <div className='w-[40%]'>
            <div className='border border-solid border-blue-500 text-center px-10 font-[700] text-[25px] py-10'>
              <p className='text-blue-500 text-[50px]'>Create</p>
              <p className='text-white text-[50px]'>Your</p>
              <p className='text-blue-500 text-[50px]'>Meme</p>
              <p className='text-white text-[50px]'>Token</p>
              <p className='text-blue-500 text-[50px]'>Now</p>
            </div>
            
            <button className='bg-blue-500 rounded-tr-xl rounded-bl-xl py-2 px-8 border border-blue-500 md:block text-white rounded-sm w-[100%] my-4'>Connect Wallet</button> 
          </div>
        </div>
    </main>
  )
}

export default LandingPage