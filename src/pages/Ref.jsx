import React from 'react'
import BottomNavigation from '../components/ui/BottomNavigation'

const Ref = () => {
  return (
    <div className="bg-[#1a1c32] w-full flex justify-center font-bold">
      <div className='w-full flex justify-center'>
        <div className='flex flex-col pt-8 space-y-3 w-full h-screen'>
          <div>
            <div className='w-full justify-center flex-col space-y-3 px-5'>
              <div className='flex space-y-0 flex-col justify-center items-center'>
                <h1 className='text-[#fff] -mb-2 text-[42px] font-semibold'>0 Users</h1>
                <span className='text-[#6ed86e] font-semibold text-[16px]'></span>
              </div>
              <div className='w-full bg-[#1f2942] bg-cards rounded-[12px] px-3 py-4 flex flex-col'>
                <span className='w-full flex justify-between items-center pb-2'>
                  <h2 className='text-[18px] font-semibold'>My invite link:</h2>
                  <span className='bg-gradient-to-b from-[#094e9d] to-[#0b62c4] font-medium py-[6px] px-4 rounded-[12px] flex items-center justify-center text-[16px]'>
                    <span>Copy</span>
                  </span>
                </span>
                <div className='text-[#9a96a6] text-[13px]'>https://t.me/plutotap_bot?start=r749982080</div>
              </div>
              <div className='bg-borders w-full px-5 h-[1px] !mt-6'></div>
              <div className='w-full flex flex-col'>
                <h3 className='text-[22px] font-semibold pb-[16px]'>My Referrals:</h3>
                <div className='w-full flex flex-col space-y-3'>
                  <p className='text-center w-full now pt-8 px-5 text-[14px] leading-[24px]'>You don't have referrals😭</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      <BottomNavigation />
      </div>
    </div>
  )
}

export default Ref