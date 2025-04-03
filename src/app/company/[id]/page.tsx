import dataJson from '@/data/data.json'
import Image from 'next/image'


export default async function Page({
  params,
}: {
  params: Promise<{ slug: string, id: string }>
}) {
  const { id } = await params
  const post = dataJson.find((post) => post.id === parseInt(id))
  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <div className='min-md:px-[355px] -mt-6'>
      <div className="flex items-center justify-between overflow-hidden bg-white border-gray-300 rounded-md dark:bg-midnight dark:border-midnight">
        <div className="h-[140px] w-[140px] flex justify-center items-center" style={{ backgroundColor: post.logoBackground }}>
          <Image src={`/${post.logo}`} alt="logo" width={64} height={64} />
        </div>

        <div className="flex justify-between w-full p-10">
          <div className="flex flex-col gap-1">
            <h2 className='font-bold text-midnight'>{post.company}</h2>
            <p className='text-sm text-dark-gray'>{post.website}</p>
          </div>
          <button className="text-violet bg-[#eeeffc] font-bold px-4 h-[48px] rounded-md">
            Company Site
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-4 p-8 mt-6 bg-white border-gray-300 rounded-md dark:bg-midnight dark:border-midnight">
        <div className="flex items-center justify-between">
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

          <button className="text-white bg-violet font-bold px-4 h-[48px] rounded-md">
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
        <ul className='pl-6 list-disc marker:text-violet'>
          {post.role.items.map((item, index) => (
            <li key={index} className='text-dark-gray'>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}