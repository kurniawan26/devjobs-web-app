'use client'
import useFilterJobStore from '@/state/useFilterJob'
import useModal from '@/state/useModal';
import Image from 'next/image'
import React from 'react'

function SearchBar() {
  const { search, location, fullTime, setSearch, setLocation, setFullTime, filterJob } = useFilterJobStore();
  const { toggleModal } = useModal();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  const handleFullTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFullTime(e.target.checked);
  };

  const handleFilter = () => {
    filterJob();
  };


  return (
    <div className="flex items-center justify-between h-20 p-4 -mt-10 bg-white border border-gray-300 rounded-md md:mt-1 dark:bg-midnight dark:border-midnight">
      <div className="flex items-center h-full gap-4 p-4 border-r-dark-gray dark:border-r-midnight grow-2">
        <Image
          src={"/assets/desktop/icon-search.svg"}
          alt="search icon"
          width={24}
          height={24}
        />
        <input
          value={search}
          onChange={handleSearchChange}
          type="text"
          placeholder="Filter by title, companies, expertise..."
          className="w-full focus:outline-none placeholder:text-gray-400 text-very-dark-blue"
        />
      </div>

      <div className="items-center hidden h-full gap-4 p-4 md:flex border-r-dark-gray dark:border-r-midnight grow-2">
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
          className="w-full focus:outline-none placeholder:text-gray-400 text-very-dark-blue"
        />
      </div>

      <div className="items-center justify-center hidden h-full text-lg md:flex grow-2">
        <input
          checked={fullTime}
          type="checkbox"
          onChange={handleFullTimeChange}
          className="h-4 w-4 text-violet bg-[#e7e8e9] border-gray-300 rounded checked:bg-violet active:bg-violet checked:border-violet"
        />
        <label className="ml-2 text-sm font-bold text-gray-900 dark:text-white">
          Full Time
        </label>
      </div>

      <button
        aria-label='Open filter modal'
        className="flex items-center justify-center w-10 h-10 md:hidden"
        onClick={toggleModal}
      >
        <Image
          src="/assets/mobile/icon-filter.svg"
          alt="Filter icon"
          width={24}
          height={24}
          className="w-6 h-6"
        />
      </button>

      <button
        aria-label='Search'
        onClick={handleFilter}
        type="button"
        className="flex items-center justify-center w-10 h-10 text-white rounded bg-violet md:hidden"
      >
        <Image
          src="/assets/desktop/icon-search.svg"
          alt="Search icon"
          width={24}
          height={24}
          className="w-6 h-6"
          style={{ filter: 'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)' }} // This changes the vector color to white
        />
      </button>

      <button onClick={handleFilter} className="bg-violet text-white rounded-md h-[48px] w-[123px] grow-1 md:block hidden">
        Search
      </button>
    </div>
  )
}

export default SearchBar