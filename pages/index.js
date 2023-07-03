import Image from 'next/image'
import { Inter } from 'next/font/google'
import Counter from '@/components/Counter'
import Post from '@/components/Post'

const inter = Inter({ subsets: ['latin'] })

import React from 'react'

export default function index() {
  return (
    <>
    <Counter />
    <Post />
    </>
  )
}
