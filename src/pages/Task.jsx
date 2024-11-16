import React from 'react'
import BottomNavigation from '../components/ui/BottomNavigation'

const Task = () => {
  return (
<div className="bg-black flex justify-center font-bold">
      <div className="w-full bg-[#1a1c32] text-white h-screen font-bold flex flex-col max-w-xl">
        <div className="px-4 z-10 pt-4">


            <div className='w-full flex flex-col h-[80vh] pt-8 pb-[60px] overflow-y-auto'>
              <div className='flex alltaskscontainer flex-col w-full space-y-2 pb-20'>

              <div className='w-full flex flex-col pt-4'>
                <h3 className='text-[18px] font-semibold'>Tasks:</h3>
              </div>

                <button className='bg-[#1f2942] opacity-100 bg-cards rounded-[10px] h-20 px-[14px] py-[8px] flex justify-between items-center'>
                  <div className='flex flex-1 items-center space-x-2'>
                    <div>
                      <img src="/task-check.png" alt="/" className='w-[50px]' />
                    </div>
                    <div className='flex flex-col space-y-1 text-left'>
                      <span className='font-semibold text-[17px]'>Join Our Social</span>
                      <div className='flex items-center space-x-1'>
                        <span className='w-[20px] h-[20px]'>
                          <img src="/clever.png" alt="/" className='w-full' />
                        </span>
                        <span className='font-medium flex items-center'>
                          <span className='text-[15px]'>3 000</span>
                        </span>
                      </div>
                    </div>
                  </div>
                <div>
                  <img src="/clever.png" alt="/" width={20} height={20} />
                </div>
                </button>

                <button className='bg-[#1f2942] opacity-100 bg-cards rounded-[10px] h-20 px-[14px] py-[8px] flex justify-between items-center'>
                  <div className='flex flex-1 items-center space-x-2'>
                    <div>
                      <img src="/task-check.png" alt="/" className='w-[50px]' />
                    </div>
                    <div className='flex flex-col space-y-1 text-left'>
                      <span className='font-semibold text-[17px]'>Join Our Social</span>
                      <div className='flex items-center space-x-1'>
                        <span className='w-[20px] h-[20px]'>
                          <img src="/clever.png" alt="/" className='w-full' />
                        </span>
                        <span className='font-medium flex items-center'>
                          <span className='text-[15px]'>20 000</span>
                        </span>
                      </div>
                    </div>
                  </div>
                <div>
                  <img src="/clever.png" alt="/" width={20} height={20} />
                </div>
                </button>

                <button className='bg-[#1f2942] opacity-100 bg-cards rounded-[10px] h-20 px-[14px] py-[8px] flex justify-between items-center'>
                  <div className='flex flex-1 items-center space-x-2'>
                    <div>
                      <img src="/task-check.png" alt="/" className='w-[50px]' />
                    </div>
                    <div className='flex flex-col space-y-1 text-left'>
                      <span className='font-semibold text-[17px]'>Subscribe To Community</span>
                      <div className='flex items-center space-x-1'>
                        <span className='w-[20px] h-[20px]'>
                          <img src="/clever.png" alt="/" className='w-full' />
                        </span>
                        <span className='font-medium flex items-center'>
                          <span className='text-[15px]'>6 000</span>
                        </span>
                      </div>
                    </div>
                  </div>
                <div>
                  <img src="/clever.png" alt="/" width={20} height={20} />
                </div>
                </button>

                <button className='bg-[#1f2942] opacity-100 bg-cards rounded-[10px] h-20 px-[14px] py-[8px] flex justify-between items-center'>
                  <div className='flex flex-1 items-center space-x-2'>
                    <div>
                      <img src="/task-check.png" alt="/" className='w-[50px]' />
                    </div>
                    <div className='flex flex-col space-y-1 text-left'>
                      <span className='font-semibold text-[17px]'>Join Our Social</span>
                      <div className='flex items-center space-x-1'>
                        <span className='w-[20px] h-[20px]'>
                          <img src="/clever.png" alt="/" className='w-full' />
                        </span>
                        <span className='font-medium flex items-center'>
                          <span className='text-[15px]'>250 000</span>
                        </span>
                      </div>
                    </div>
                  </div>
                <div>
                  <img src="/clever.png" alt="/" width={20} height={20} />
                </div>
                </button>

                <button className='bg-[#1f2942] opacity-100 bg-cards rounded-[10px] h-20 px-[14px] py-[8px] flex justify-between items-center'>
                  <div className='flex flex-1 items-center space-x-2'>
                    <div>
                      <img src="/task-check.png" alt="/" className='w-[50px]' />
                    </div>
                    <div className='flex flex-col space-y-1 text-left'>
                      <span className='font-semibold text-[17px]'>Join Our Social</span>
                      <div className='flex items-center space-x-1'>
                        <span className='w-[20px] h-[20px]'>
                          <img src="/clever.png" alt="/" className='w-full' />
                        </span>
                        <span className='font-medium flex items-center'>
                          <span className='text-[15px]'>3 000</span>
                        </span>
                      </div>
                    </div>
                  </div>
                <div>
                  <img src="/clever.png" alt="/" width={20} height={20} />
                </div>
                </button>

                <div className='w-full flex flex-col pt-4'>
                  <h3 className='text-[18px] font-semibold'>Partners:</h3>
                </div>

                <button className='bg-[#1f2942] opacity-100 bg-cards rounded-[10px] h-20 px-[14px] py-[8px] flex justify-between items-center'>
                  <div className='flex flex-1 items-center space-x-2'>
                    <div>
                      <img src="/task-check.png" alt="/" className='w-[50px]' />
                    </div>
                    <div className='flex flex-col space-y-1 text-left'>
                      <span className='font-semibold text-[17px]'>Join Our Social</span>
                      <div className='flex items-center space-x-1'>
                        <span className='w-[20px] h-[20px]'>
                          <img src="/clever.png" alt="/" className='w-full' />
                        </span>
                        <span className='font-medium flex items-center'>
                          <span className='text-[15px]'>20 000</span>
                        </span>
                      </div>
                    </div>
                  </div>
                <div>
                  <img src="/clever.png" alt="/" width={20} height={20} />
                </div>
                </button>

                <button className='bg-[#1f2942] opacity-100 bg-cards rounded-[10px] h-20 px-[14px] py-[8px] flex justify-between items-center'>
                  <div className='flex flex-1 items-center space-x-2'>
                    <div>
                      <img src="/task-check.png" alt="/" className='w-[50px]' />
                    </div>
                    <div className='flex flex-col space-y-1 text-left'>
                      <span className='font-semibold text-[17px]'>Subscribe To Community</span>
                      <div className='flex items-center space-x-1'>
                        <span className='w-[20px] h-[20px]'>
                          <img src="/clever.png" alt="/" className='w-full' />
                        </span>
                        <span className='font-medium flex items-center'>
                          <span className='text-[15px]'>6 000</span>
                        </span>
                      </div>
                    </div>
                  </div>
                <div>
                  <img src="/clever.png" alt="/" width={20} height={20} />
                </div>
                </button>

                <button className='bg-[#1f2942] opacity-100 bg-cards rounded-[10px] h-20 px-[14px] py-[8px] flex justify-between items-center'>
                  <div className='flex flex-1 items-center space-x-2'>
                    <div>
                      <img src="/task-check.png" alt="/" className='w-[50px]' />
                    </div>
                    <div className='flex flex-col space-y-1 text-left'>
                      <span className='font-semibold text-[17px]'>Join Our Social</span>
                      <div className='flex items-center space-x-1'>
                        <span className='w-[20px] h-[20px]'>
                          <img src="/clever.png" alt="/" className='w-full' />
                        </span>
                        <span className='font-medium flex items-center'>
                          <span className='text-[15px]'>250 000</span>
                        </span>
                      </div>
                    </div>
                  </div>
                <div>
                  <img src="/clever.png" alt="/" width={20} height={20} />
                </div>
                </button>
                
              </div>
            </div>

        </div>
      </div>
      <BottomNavigation />
    </div>
  )
}

export default Task