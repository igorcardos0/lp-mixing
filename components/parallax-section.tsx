"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function ParallaxSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height)
        setOffset(scrollProgress * 100)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section ref={sectionRef} className="relative h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          transform: `translateY(${offset * 0.5}px)`,
          transition: "transform 0.1s linear",
        }}
      >
        <Image
          src="/foto-parallax.jpg"
          alt="Bar de coquetelaria premium"
          fill
          className="object-cover"
          loading="lazy"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-background" />
      </div>

      <div className="relative z-10 h-full flex items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-5 md:mb-6 text-balance drop-shadow-2xl">
            O Brinde que se Torna a Atração Central
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 text-pretty drop-shadow-lg">
            Você não está contratando apenas um bar, mas uma experiência sensorial completa
          </p>
        </div>
      </div>
    </section>
  )
}
