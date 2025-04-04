import Image from 'next/image'
import React from 'react'

interface IHeaderContentProps {
  logo: string;
  logoBackground: string;
  company: string;
  website: string;
}

function HeaderContent({ post }: { post: IHeaderContentProps }) {
  return (
    <div className="relative flex flex-col items-center justify-between bg-white border-gray-300 rounded-md md:flex-row dark:bg-midnight dark:border-midnight">
      <div className="md:h-[140px] md:w-[140px] w-[50px] rounded p-2 h-[50px] flex justify-center items-center absolute md:static -top-8 md:top-0" style={{ backgroundColor: post.logoBackground }}>
        <Image src={`/${post.logo}`} alt="logo" layout="responsive" width={64} height={64} />
      </div>

      <div className="flex flex-col justify-between w-full gap-4 p-8 mt-4 md:mt-0 md:p-10 md:flex-row">
        <div className="flex flex-col items-center gap-1 md:items-start">
          <h2 className='font-bold text-midnight dark:text-white'>{post.company}</h2>
          <p className='text-sm text-dark-gray'>{post.website}</p>
        </div>
        <button className="text-violet bg-[#eeeffc] font-bold px-4 h-[48px] justify-self-center rounded-md  dark:bg-[#303642] dark:text-white">
          Company Site
        </button>
      </div>
    </div>
  )
}

export default HeaderContent