import React from 'react'
import Link from 'next/link'



const BottomNav = () => {


    
  return (
    <div className='flex flex-col space-y-6 fixed bottom-0 py-6 left-0 right-0 justify-center items-center px-5 bg-[#1a1c32]'>
        <div className='w-full flex items-center justify-center space-x-2'>
            <Link href="/" className='bg-[#1f2942] w-[70px] h-[70px] p-1 text-center ml-2 justify-between items-center rounded-xl'>
                <img className='justify-between items-center pt-2 m-auto' src="/clever.png" alt="/" width={30} height={30}/>
                <p className='font-sans text-sm' >Tap</p>
            </Link>
            <Link href="../pages/Ref" className='bg-[#1f2942] w-[70px] h-[70px] p-1 text-center ml-2 justify-between items-center rounded-xl'>
                <img className='justify-between items-center pt-2 m-auto' src="/users.png" alt="/" width={30} height={30}/>
                <p className='font-sans text-sm'>Ref</p>
            </Link>
            <Link href="../pages/Task" className='bg-[#1f2942] w-[70px] h-[70px] p-1 text-center ml-2 justify-between items-center rounded-xl'>
                <img className='justify-between items-center pt-2 m-auto' src="/package-check.png" alt="/" width={30} height={30}/>
                <p className='font-sans text-sm'>Task</p>
            </Link>
            {/* <Link href="../pages/Boost" className='bg-[#1f2942] w-[70px] h-[70px] p-1 text-center ml-2 justify-between items-center rounded-xl'>
                <img className='justify-between items-center pt-2 m-auto' src="/flame.png" alt="/" width={30} height={30}/>
                <p className='font-sans text-sm' >Boost</p>
            </Link> */}
            <Link href="../pages/Wallet" className='bg-[#1f2942] w-[70px] h-[70px] p-1 text-center ml-2 justify-between items-center rounded-xl'>
                <img className='justify-between items-center pt-2 m-auto' src="/wallet.png" alt="/" width={30} height={30}/>
                <p className='font-sans text-sm' >Wallet</p>
            </Link>
        </div>
    </div>
  )
}

export default BottomNav