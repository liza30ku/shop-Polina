import Layout from "@/components/layouts/Layouts"
import Hero from "@/components/modules/MainPage/Hero/Hero"
import { HeroSection } from "@/components/modules/MainPage/Hero/Hero-context"
import CategorySection from "@/components/modules/MainPage/Categories/Categories"
import PhraseSection from "@/components/modules/MainPage/Phrase/Phrase"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <HeroSection />
      <CategorySection />
      <PhraseSection />
    </Layout>
  )
}