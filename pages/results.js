import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Header from '../components/Header/header'
import ResultsMain from '../components/Results/ResultsMain'
import Sidebar from '../components/Sidebar/Sidebar'
import { setSearch, setSearchResults } from '../redux/searchSlice'
import { fetchSearchResults } from '../utils/fetchData'

function Results({ res }) {
  const dispatch = useDispatch()
  const router = useRouter()
  console.log('query router', router.query)
  const { search_query } = router.query
  console.log('search query simply', search_query)

  useEffect(() => {
    const fetchResults = async () => {
      // const { search_query } = router.query

      console.log('search_query use effect', search_query)
      const value = search_query
      const results = await fetchSearchResults(value)
      console.log('results', results)
      dispatch(setSearch(value))
      dispatch(setSearchResults(results.items))
    }

    fetchResults()
  }, [dispatch, search_query, router.query])

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
      res: res.items,
    },
  }
}
