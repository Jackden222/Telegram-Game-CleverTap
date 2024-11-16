import React from 'react'
import BottomNavigation from '../components/ui/BottomNavigation'

const Wallet = () => {
  return (
<div className='bg-black flex justify-center'>
      <div className='w-full bg-[#1a1c32] text-white h-[900px] font-bold flex flex-col max-w-xl'>
        <div className='px-4 z-10 mt-2'>
            {/* MY Assets and Button connect */}
            <div className='flex w-full items-center h-16'>
              <div className='w-2/5 p-4 pt-6'>
                <h1 className='font-bold text-base text-white'>My Assets:</h1>
              </div>
              <div className='flex w-3/5 p-4 pt-6'>
                <button className='flex w-full h-10 p-2 rounded-full justify-between items-center bg-[#319cdf] text-[12px]'><img src="/wallet-connect.png" alt="connect-wallet"  width={20} height={15}/>Connect your wallet <img src="/chevron.png" alt="" width={15} height={15}/></button>
              </div>
            </div>

            <div className='flex w-full h-32 bg-[#1f2942] mt-4 rounded-2xl p-4'>
              <div className='w-2/4 items-center'>
                <div className='flex w-full h-2/6'>
                  <p className='text-[13px] text-gray-400'>Total Assets</p>
                  {/* IMG EYE */}
                </div>
                <div className='flex w-full h-3/6'>
                  <p className='text-3xl font-bold'>250,64 <span className='text-sm'>USDT</span></p>
                </div>
                <div className='flex w-full h-2/6'>
                  <p className='text-[12px]'>~ 2 880,00 <span className='text-[12px]'>CLC</span></p>
                </div>
              </div>
              <div className='w-2/4'>
                {/* clear tag */}
              </div>
            </div>

            <div className='flex flex-col-3 w-full items-center h-24'>
              <button className='flex flex-col bg-[#1f2942] rounded-2xl mr-2 p-4 w-2/6 h-18'>
                <img src="/withdraw.svg" alt="withdraw" className='m-auto mb-2' width={20} height={20}/>
                <p className='text-[12px] m-auto'>Withdraw</p>
              </button>
              <button  className='flex flex-col bg-[#1f2942] rounded-2xl mr-2 p-4 w-2/6 h-18'>
                <img src="/transfer.png" alt="transfer" className='m-auto mb-2' width={20} height={20}/>
                <p className='text-[12px] m-auto'>Transfer</p>
              </button>
              <button  className='flex flex-col bg-[#1f2942] rounded-2xl mr-2 p-4 w-2/6 h-18'>
                <img src="/convert.png" alt="convert" className='m-auto mb-2' width={20} height={20}/>
                <p className='text-[12px] m-auto'>Convert</p>
              </button>
            </div>


            <div className='w-full items-center h-16 mt-4'>
              <div className='w-2/5 p-4 pt-6'>
                <h1 className='font-bold text-base text-white'>Similar Assets</h1>
              </div>

              <div className='w-full flex flex-col space-y-[10px]'>

                <div className='w-full bg-[#1f2942] bg-cards text-[14px] rounded-[6px] px-4 py-4 flex items-center justify-between'>
                  <div className='flex flex-1 space-x-2 items-center'>
                    <span className='flex items-center justify-center'>
                      <img src="/ton.png" alt="" className='w-[30px] rounded-full'/>
                    </span>
                    <h4>TonCoin</h4>
                  </div>
                  <div className='flex flex-col items-end font-medium'>
                    <span>$ 0,00</span>
                  </div>
                </div>
                <div className='w-full bg-[#1f2942] bg-cards text-[14px] rounded-[6px] px-4 py-4 flex items-center justify-between'>
                  <div className='flex flex-1 space-x-2 items-center'>
                    <span className='flex items-center justify-center'>
                      <img src="/bitcoin.png" alt="" className='w-[30px] rounded-full'/>
                    </span>
                    <h4>BitCoin</h4>
                  </div>
                  <div className='flex flex-col items-end font-medium'>
                    <span>$ 0,00</span>
                  </div>
                </div>
                <div className='w-full bg-[#1f2942] bg-cards text-[14px] rounded-[6px] px-4 py-4 flex items-center justify-between'>
                  <div className='flex flex-1 space-x-2 items-center'>
                    <span className='flex items-center justify-center'>
                      <img src="/clever.png" alt="/" className='w-[30px] rounded-full'/>
                    </span>
                    <h4>CleverCoin</h4>
                  </div>
                  <div className='flex flex-col items-end font-medium'>
                    <span>$ 250,64</span>
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

export default Wallet