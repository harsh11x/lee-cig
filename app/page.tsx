import HeroSlider from '@/components/HeroSlider'
import ProductShowcase from '@/components/ProductShowcase'
import StoriesAndPress from '@/components/StoriesAndPress'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSlider />
      <ProductShowcase />
      <StoriesAndPress />
    </main>
  )
}
