import React from 'react'

interface IBodyContentProps {
  postedAt: string;
  contract: string;
  position: string;
  location: string;
  description: string;
  requirements: {
    content: string;
    items: string[];
  };
  role: {
    content: string;
    items: string[];
  };
}

function BodyContent({ post }: { post: IBodyContentProps }) {
  return (
    <div className="flex flex-col gap-4 p-4 mt-6 bg-white border-gray-300 rounded-md md:p-8 dark:bg-midnight dark:border-midnight">
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 text-dark-gray">
            <p className='text-dark-gray'>{post.postedAt}</p>
            <span className="text-2xl">&bull;</span>
            <p className='text-dark-gray'>{post.contract}</p>
          </div>
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

      <p className=''>{post.description}</p>

      <h3 className='font-bold text-midnight'>Requirements</h3>
      <p className=''>{post.requirements.content}</p>
      <ul className='pl-6 list-disc marker:text-violet'>
        {post.requirements.items.map((item, index) => (
          <li key={index} className='text-dark-gray'>{item}</li>
        ))}
      </ul>

      <h3 className='font-bold text-midnight'>What you will do</h3>
      <p className=''>{post.role.content}</p>
      <ol className='pl-6 list-decimal marker:font-bold marker:text-violet'>
        {post.role.items.map((item, index) => (
          <li key={index} className='text-dark-gray'>{item}</li>
        ))}
      </ol>
    </div>
  )
}

export default BodyContent