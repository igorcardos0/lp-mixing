"use client"

import { useEffect, useRef, useState } from "react"
import { Award, TrendingUp, Shield } from "lucide-react"
import Image from "next/image"

const aboutImages = [
  {
    url: "/foto-about-1.jpg",
    alt: "Bartender profissional preparando coquetel",
  },
  {
    url: "/foto-about-2.jpg",
    alt: "Mesa de coquetéis em casamento de luxo",
  },
  {
    url: "/foto-galeria-1.jpg",
    alt: "Bar de coquetelaria elegante",
  },
  {
    url: "/foto-galeria-2.jpg",
    alt: "Bartender preparando drinks",
  },
  {
    url: "/foto-galeria-3.jpg",
    alt: "Mesa de drinks para casamento",
  },
  {
    url: "/foto-galeria-4.jpg",
    alt: "Variedade de cocktails",
  },
]

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
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

  // Carrossel automático
  useEffect(() => {
    if (!isVisible) return

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % aboutImages.length)
    }, 4000) // Muda a cada 4 segundos

    return () => clearInterval(interval)
  }, [isVisible])

  return (
    <section
      id="sobre"
      ref={sectionRef}
      className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-br from-accent/10 via-background to-secondary/20 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-1/4 -left-10 sm:-left-20 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-10 sm:-right-20 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-10 sm:mb-12 md:mb-16 transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-balance px-4 sm:px-0">
            Sobre a <span className="text-primary">Mixing Coquetelaria</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-stretch mb-8 sm:mb-10 md:mb-12">
            {/* Card de Texto */}
            <div
              className={`transition-all duration-1000 delay-200 transform ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="bg-card/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl border border-border h-full flex flex-col justify-center">
                <p className="text-base sm:text-lg md:text-xl text-foreground leading-relaxed mb-4 sm:mb-6">
                  A Mixing Coquetelaria conta com mais de <strong className="text-primary">10 anos de mercado</strong>{" "}
                  em Jaú e região. Evoluímos de um serviço de bar para uma empresa de{" "}
                  <strong className="text-primary">Alta Coquetelaria e Entretenimento Premium</strong>.
                </p>

                <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 sm:mb-8">
                  Nossa história é pautada pelo profissionalismo e pela busca incessante pelo "Uau". Diferente de bares
                  comuns, nós unimos drinks autorais, uma logística de atendimento ágil e uma postura institucional
                  séria (com nota fiscal e contratos claros).
                </p>

                <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Somos o{" "}
                  <strong className="text-foreground">parceiro estratégico das cerimonialistas mais exigentes</strong>{" "}
                  porque entendemos que o bar é o coração da pista de dança: ele precisa ser lindo, eficiente e
                  impecável.
                </p>
              </div>
            </div>

            {/* Card com Carrossel de Fotos */}
            <div
              className={`transition-all duration-1000 delay-400 transform ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <div className="relative h-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-border">
                {/* Imagens do carrossel */}
                {aboutImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentImageIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                    }`}
                  >
                    <Image
                      src={image.url}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                ))}

                {/* Indicadores de slide */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                  {aboutImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        index === currentImageIndex
                          ? "w-8 bg-primary"
                          : "w-2 bg-white/50 hover:bg-white/75"
                      }`}
                      aria-label={`Ir para imagem ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Key Highlights */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 transition-all duration-1000 delay-600 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {[
              {
                icon: Award,
                title: "Excelência",
                description: "Referência em alta coquetelaria",
              },
              {
                icon: TrendingUp,
                title: "Evolução",
                description: "De bar tradicional a entretenimento premium",
              },
              {
                icon: Shield,
                title: "Confiança",
                description: "Parceiro das melhores cerimonialistas",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-card rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-border hover:border-primary transition-all duration-300 hover:shadow-xl group"
              >
                <item.icon className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-3 sm:mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">{item.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
