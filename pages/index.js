import Head from 'next/head'
import { useDispatch } from 'react-redux'
import CategoriesBar from '../components/Categories/CategoriesBar'
import Feed from '../components/Feed/Feed'
import Header from '../components/Header/header'
import Sidebar from '../components/Sidebar/Sidebar'
import { setNextPageToken, setVideos } from '../redux/videoSlice'
import { fetchVideoSSR } from '../utils/fetchData'

export default function Home({ items, nextPageToken }) {
  const dispatch = useDispatch()
  dispatch(setVideos(items))
  console.log('nextPageToken', nextPageToken)
  dispatch(setNextPageToken(nextPageToken))

  return (
    <>
      <div className='h-screen overflow-hidden bg-white text-black'>
        <Head>
          <title>Youtube redesign</title>
          <meta name='description' content='Youtube redesign' />
          <link rel='icon' href='/favicon.ico' />
        </Head>

        {/* Header */}
        <Header />

        <main className='flex h-full'>
          <Sidebar />

          <div className='h-full flex-1 overflow-hidden border-t xl:flex-[0.85]'>
            <CategoriesBar />

            <Feed />
          </div>
        </main>
      </div>
    </>
  )
}

// server side rendering
export async function getServerSideProps() {
  const res = await fetchVideoSSR()

  const { items, nextPageToken } = res

  return {
    props: {
      items,
      nextPageToken,
    }, // will be passed to the page component as props
  }
}
