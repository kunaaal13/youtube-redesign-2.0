import Head from 'next/head'
import CategoriesBar from '../components/Categories/CategoriesBar'
import Feed from '../components/Feed/Feed'
import Header from '../components/Header/header'
import Sidebar from '../components/Sidebar/Sidebar'

export default function Home() {
  return (
    <>
      <div className='h-screen bg-white text-black overflow-hidden'>
        <Head>
          <title>Youtube redesign</title>
          <meta name='description' content='Youtube redesign' />
          <link rel='icon' href='/favicon.ico' />
        </Head>

        {/* Header */}
        <Header />

        <main className='h-full flex'>
          <Sidebar />

          <div className='flex-1 xl:flex-[0.85] h-full border-t overflow-hidden'>
            <CategoriesBar />

            <Feed />
          </div>
        </main>
      </div>
    </>
  )
}
