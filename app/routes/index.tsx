import { createFileRoute } from '@tanstack/react-router'
import HeroSection from '@/components/blocks/hero'

export const Route = createFileRoute('/')({
  component: Home
})

function Home() {
  return <HeroSection />
}