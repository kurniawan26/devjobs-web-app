import BodyContent from '@/components/Pages/DetailPage/BodyContent'
import FooterContent from '@/components/Pages/DetailPage/FooterContent'
import HeaderContent from '@/components/Pages/DetailPage/HeaderContent'
import dataJson from '@/data/data.json'


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
    <div className='w-full'>
      <div className='-mt-6 sm:px-0 max-md:px-8 lg:px-30'>
        <HeaderContent post={post} />
        <BodyContent post={post} />
      </div>

      <FooterContent post={post} />
    </div>
  )
}