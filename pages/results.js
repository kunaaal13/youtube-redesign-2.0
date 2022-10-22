import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Header from '../components/Header/header'
import ResultsMain from '../components/Results/ResultsMain'
import Sidebar from '../components/Sidebar/Sidebar'
import { setSearchResults } from '../redux/searchSlice'
import { fetchSearchResults } from '../utils/fetchData'

function Results({ res, search_query }) {
  const dispatch = useDispatch()
  console.log('res', res)

  console.log('search_query', search_query)

  useEffect(() => {
    dispatch(setSearchResults(null))
    dispatch(setSearchResults(res))
  }, [dispatch, res])

  return (
    <div className='h-screen overflow-hidden bg-white text-black'>
      <Head>
        <title>Search : {search_query}</title>
        <meta name='description' content='Youtube redesign' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* Header */}
      <Header />

      <main className='flex h-full'>
        <Sidebar />

        <div className='h-full flex-1 overflow-hidden border-t xl:flex-[0.85]'>
          <ResultsMain />
        </div>
      </main>
    </div>
  )
}

export default Results

// Server side rendering
export async function getServerSideProps(context) {
  const { search_query } = context.query

  const value = search_query

  const res = await fetchSearchResults(value)

  return {
    props: {
      search_query,
      res: res.items,
    },
  }
}
