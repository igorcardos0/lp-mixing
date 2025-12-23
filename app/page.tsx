import dynamic from "next/dynamic"
import { HeroSection } from "@/components/hero-section"
import { Navigation } from "@/components/navigation"
import { AnimatedBackground } from "@/components/animated-background"
import { LoadingScreen } from "@/components/loading-screen"

// Lazy load components below the fold
const IntroSection = dynamic(() => import("@/components/intro-section").then((mod) => ({ default: mod.IntroSection })), {
  loading: () => <div className="min-h-[500px]" />,
})

const AboutSection = dynamic(() => import("@/components/about-section").then((mod) => ({ default: mod.AboutSection })), {
  loading: () => <div className="min-h-[500px]" />,
})

const FeaturesSection = dynamic(
  () => import("@/components/features-section").then((mod) => ({ default: mod.FeaturesSection })),
  {
    loading: () => <div className="min-h-[500px]" />,
  },
)

const ParallaxSection = dynamic(
  () => import("@/components/parallax-section").then((mod) => ({ default: mod.ParallaxSection })),
  {
    loading: () => <div className="min-h-[600px]" />,
  },
)

const GallerySection = dynamic(() => import("@/components/gallery-section").then((mod) => ({ default: mod.GallerySection })), {
  loading: () => <div className="min-h-[500px]" />,
})

const InstagramSection = dynamic(
  () => import("@/components/instagram-section").then((mod) => ({ default: mod.InstagramSection })),
  {
    loading: () => <div className="min-h-[500px]" />,
  },
)

const CTASection = dynamic(() => import("@/components/cta-section").then((mod) => ({ default: mod.CTASection })), {
  loading: () => <div className="min-h-[500px]" />,
})

const Footer = dynamic(() => import("@/components/footer").then((mod) => ({ default: mod.Footer })), {
  loading: () => <div className="min-h-[200px]" />,
})

export default function Home() {
  return (
    <main className="min-h-screen">
      <LoadingScreen />
      <AnimatedBackground />
      <Navigation />
      <HeroSection />
      <IntroSection />
      <AboutSection />
      <FeaturesSection />
      <ParallaxSection />
      <GallerySection />
      <InstagramSection />
      <CTASection />
      <Footer />
    </main>
  )
}
