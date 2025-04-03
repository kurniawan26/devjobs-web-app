'use client'
import useFilterJobStore from '@/state/useFilterJob'
import Image from 'next/image'
import React from 'react'

function SearchBar() {
  const { search, location, fullTime, setSearch, setLocation, setFullTime, filterJob } = useFilterJobStore();

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
    <div className="flex h-20 -mt-10 md:mt-1 border items-center justify-between bg-white dark:bg-midnight dark:border-midnight border-gray-300 rounded-md p-4">
      <div className="flex h-full items-center border-r dark:border-r-midnight grow-2 gap-4 p-4">
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
          className="focus:outline-none placeholder:text-gray-400 w-full text-very-dark-blue"
        />
      </div>

      <div className="md:flex hidden h-full items-center border-r dark:border-r-midnight grow-2 gap-4 p-4">
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
          className="focus:outline-none placeholder:text-gray-400 w-full text-very-dark-blue"
        />
      </div>

      <div className="h-full text-lg hidden md:flex items-center justify-center grow-2">
        <input
          checked={fullTime}
          type="checkbox"
          onChange={handleFullTimeChange}
          className="h-4 w-4 text-violet bg-[#e7e8e9] border-gray-300 rounded checked:bg-violet active:bg-violet checked:border-violet"
        />
        <label className="ml-2 text-sm text-gray-900 dark:text-white">
          Full Time
        </label>
      </div>
      <button onClick={handleFilter} className="bg-violet text-white rounded-md h-[48px] w-[123px] grow-1 ">
        Search
      </button>
    </div>
  )
}

export default SearchBar