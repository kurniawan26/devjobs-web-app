import React from 'react'

interface IFooterContentProps {
  position: string;
  location: string;
}

function FooterContent({ post }: { post: IFooterContentProps }) {
  return (
    <div className="absolute left-0 w-full mt-6 bg-white border-gray-300 rounded-md dark:bg-very-dark-blue dark:border-midnight">
      <div className="flex items-center justify-between w-full py-4 sm:px-0 max-md:px-8 lg:px-56">
        <div className="flex flex-col items-center justify-between w-full gap-4 md:flex-row">
          <div className="flex-col hidden gap-2 md:flex">
            <h3 className="font-bold text-very-dark-blue dark:text-white">
              {post.position}
            </h3>
            <h4 className="font-bold text-violet">
              {post.location}
            </h4>
          </div>

          <button className="text-white bg-violet font-bold px-4 h-[48px] rounded-md md:w-[141px] mt-4 md:mt-0 w-full">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default FooterContent