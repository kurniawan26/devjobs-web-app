'use client'
import useFilterJobStore from '@/state/useFilterJob';
import useModal from '@/state/useModal';
import Image from 'next/image'
import React, { useRef } from 'react'

function ModalFilter() {
  const ref = useRef<HTMLDivElement>(null);
  const { isOpen, closeModal } = useModal();
  const { location, fullTime, setLocation, setFullTime, filterJob } = useFilterJobStore();

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  const handleFullTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFullTime(e.target.checked);
  };

  const handleFilter = () => {
    filterJob();
  };

  const handleCloseModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if (ref.current && e.target === ref.current) {
      closeModal();
    }
  };

  return (
    <div
      ref={ref} onClick={handleCloseModal}
      className="absolute top-0 left-0 z-10 flex items-center justify-center w-full h-screen transition-all bg-gray-900/50 dark:bg-midnight/50"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      style={{
        opacity: isOpen ? 1 : 0,
        transition: 'all 300ms ease-in-out',
        visibility: isOpen ? 'visible' : 'hidden',
      }}
    >
      <div className="fixed z-10 w-screen overflow-y-auto">
        <div className="flex items-center justify-center p-4 text-center sm:items-center sm:p-0">

          <div aria-label='no-close-here' className="relative w-full h-full text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:w-full sm:max-w-lg">
            <div className="flex flex-col justify-start gap-4 m-4">
              <div className="flex items-center h-full gap-4 md:flex border-r-dark-gray dark:border-r-midnight">
                <Image
                  src={"/assets/desktop/icon-location.svg"}
                  alt="location icon"
                  width={24}
                  height={24}
                />
                <input
                  type="text"
                  value={location}
                  onChange={handleLocationChange}
                  placeholder="Filter by location..."
                  className="z-10 w-full focus:outline-none placeholder:text-gray-400 text-very-dark-blue"
                />
              </div>

              <hr className='text-light-gray' />

              <div className="flex items-center justify-start h-full gap-4 text-lg md:flex">
                <input
                  checked={fullTime}
                  type="checkbox"
                  onChange={handleFullTimeChange}
                  className="h-4 w-4 text-violet bg-[#e7e8e9] border-gray-300 rounded checked:bg-violet active:bg-violet checked:border-violet z-10"
                />
                <label className="text-sm font-bold text-gray-900 dark:text-white">
                  Full Time Only
                </label>
              </div>
              <button onClick={handleFilter} className="text-white rounded-md bg-violet h-[48px]">
                Search
              </button>
            </div>

          </div>
        </div>
      </div>
    </div >

  )
}

export default ModalFilter