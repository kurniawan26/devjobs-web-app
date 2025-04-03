import Image from 'next/image'
import React from 'react'

type JobCardProps = {
  postedAt: string;
  company: string;
  logo: string;
  logoBackground: string;
  position: string;
  location: string;
  contract: string;
}


function JobCard({ postedAt, company, logo, logoBackground, position, location, contract }: JobCardProps) {
  return (
    <div className="flex flex-col justify-evenly bg-white dark:bg-very-dark-blue relative px-3 rounded-md py-6 gap-4">
      <div style={
        {
          backgroundColor: logoBackground,
        }
      } className="rounded-xl w-12 h-12 flex items-center justify-center absolute -top-6 left-4">
        <Image src={logo} alt="logo" width={24} height={24} />
      </div>

      <div className="card-content">
        <div className="flex gap-2 text-dark-gray mt-4">
          <p>{postedAt}</p>
          <span className="text-2xl">&bull;</span>
          <p>{contract}</p>
        </div>

        <h3 className="font-bold text-very-dark-blue dark:text-white">
          <a href="#">{position}</a>
        </h3>

        <p className="text-dark-gray">{company}</p>
      </div>


      <h4 className="justify-self-end font-bold text-violet">
        {location}
      </h4>
    </div>
  )
}

export default JobCard