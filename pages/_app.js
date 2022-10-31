import { Provider, useDispatch } from 'react-redux'
import '../styles/globals.css'
import { store } from '../redux/store'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Progress from '../components/progress/Progress'
import { SessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const router = useRouter()
  const [isAnimating, setIsAnimating] = useState(false)

  // use effect
  useEffect(() => {
    const handleStart = () => {
      setIsAnimating(true)
    }

    const handleComplete = () => {
      setIsAnimating(false)
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  }, [router])

  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Progress isAnimating={isAnimating} />
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  )
}

export default MyApp
