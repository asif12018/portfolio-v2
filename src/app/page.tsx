import type { Metadata } from 'next'
import HomeClient from '@/components/HomeClient'

export const metadata: Metadata = {
  title: 'Asif Sheikh',
  description: 'Full-Stack Web Developer building exceptional digital experiences.',
}

export default function HomePage() {
  return <HomeClient />
}
