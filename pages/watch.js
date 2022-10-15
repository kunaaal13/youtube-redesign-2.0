import { useRouter } from 'next/router'
import React from 'react'

function Watch() {
  const router = useRouter()
  console.log(router.query.v)
  return <div>watch</div>
}

export default Watch
