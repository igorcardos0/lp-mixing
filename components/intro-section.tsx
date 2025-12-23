"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function IntroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 md:py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center max-w-7xl mx-auto">
          <div
            className={`transition-all duration-1000 transform ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-muted">
              <Image
                src="/foto-intro.jpg"
                alt="Bar elegante com detalhes dourados"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                quality={90}
                unoptimized={false}
              />
            </div>
          </div>

          <div
            className={`transition-all duration-1000 transform ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-balance">
              O Brinde que se Torna a <span className="text-primary">Atração Central</span> do seu Grande Dia
            </h2>

            <div className="prose prose-sm sm:prose-base md:prose-lg max-w-none">
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                Você não está contratando apenas um bar, mas uma{" "}
                <strong className="text-foreground">experiência sensorial completa</strong>. Com a Mixing, você garante
                o equilíbrio perfeito entre drinks autorais, estética impecável e a tranquilidade de um fornecedor 100%
                homologado.
              </p>

              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                Elevamos o padrão do seu evento com a{" "}
                <strong className="text-foreground">sofisticação que seus convidados esperam</strong> e a segurança que
                você exige.
              </p>
            </div>

            <div className="mt-6 sm:mt-8 flex justify-start">
              <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-primary to-transparent rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
