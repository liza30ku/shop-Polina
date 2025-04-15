import React from "react";
import Hero from "@/components/modules/MainPage/Hero/Hero";
import {HeroSection} from "@/components/modules/MainPage/Hero/Hero-context";
import CategorySection from "@/components/modules/MainPage/Categories/Categories";
import PhraseSection from "@/components/modules/MainPage/Phrase/Phrase";



function MainPage() {
  return (
        <main>
        <Hero />
        <HeroSection />
        <CategorySection />
        <PhraseSection />
        </main>
    );
}

export default MainPage;
