import Banner from '@/components/Banner'
import Products from '@/components/Products'
import Image from 'next/image'

export default async function Home() {
  return (
    <main>
      <Banner />
      <Products />
    </main>
  )
}
