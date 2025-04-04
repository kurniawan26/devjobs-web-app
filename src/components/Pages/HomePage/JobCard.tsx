import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

type JobCardProps = {
  id: number;
  postedAt: string;
  company: string;
  logo: string;
  logoBackground: string;
  position: string;
  location: string;
  contract: string;
}


function JobCard({ postedAt, company, logo, logoBackground, position, location, contract, id }: JobCardProps) {
  return (
    <div className="relative flex flex-col gap-4 px-3 py-6 bg-white rounded-md justify-evenly dark:bg-very-dark-blue">
      <div style={
        {
          backgroundColor: logoBackground,
        }
      } className="absolute flex items-center justify-center w-12 h-12 rounded-xl -top-6 left-4">
        <Image src={logo} alt="logo" width={24} height={24} />
      </div>

      <div className="card-content">
        <div className="flex gap-2 mt-4 text-dark-gray">
          <p>{postedAt}</p>
          <span className="text-2xl">&bull;</span>
          <p>{contract}</p>
        </div>

        <h3 className="font-bold text-very-dark-blue dark:text-white">
          <Link href={`/company/${id}`}>
            {position}
          </Link>

        </h3>

        <p className="text-dark-gray">{company}</p>
      </div>


      <h4 className="font-bold justify-self-end text-violet">
        {location}
      </h4>
    </div>
  )
}

export default JobCard