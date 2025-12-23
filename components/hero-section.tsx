"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Efeito animado dourado no fundo - mais sutil */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none bg-black">
        {/* Gradiente animado dourado principal - mais sutil */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, transparent 0%, rgba(211, 183, 131, 0.05) 25%, rgba(211, 183, 131, 0.1) 50%, rgba(211, 183, 131, 0.05) 75%, transparent 100%)",
            backgroundSize: "300% 300%",
            animation: "golden-shimmer 6s ease-in-out infinite",
          }}
        />
        {/* Segunda camada de gradiente com movimento diferente - mais sutil */}
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background: "linear-gradient(45deg, transparent 0%, rgba(211, 183, 131, 0.03) 30%, rgba(211, 183, 131, 0.08) 50%, rgba(211, 183, 131, 0.03) 70%, transparent 100%)",
            backgroundSize: "400% 400%",
            animation: "golden-shimmer 8s ease-in-out infinite reverse",
          }}
        />
        {/* Partículas douradas animadas flutuantes - mais sutis */}
        <div
          className="absolute top-20 left-10 sm:left-20 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-primary/15 rounded-full blur-3xl"
          style={{
            animation: "float-fast 4s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-20 right-10 sm:right-20 w-72 sm:w-96 md:w-[500px] h-72 sm:h-96 md:h-[500px] bg-accent/15 rounded-full blur-3xl"
          style={{
            animation: "float-slow 5s ease-in-out infinite",
            animationDelay: "1.5s",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[500px] md:w-[600px] h-[400px] sm:h-[500px] md:h-[600px] bg-primary/10 rounded-full blur-3xl"
          style={{
            animation: "float-fast 6s ease-in-out infinite",
            animationDelay: "2s",
          }}
        />
        {/* Partículas adicionais para mais movimento - mais sutis */}
        <div
          className="absolute top-1/4 right-1/4 w-56 sm:w-72 md:w-80 h-56 sm:h-72 md:h-80 bg-accent/12 rounded-full blur-3xl"
          style={{
            animation: "float 5s ease-in-out infinite",
            animationDelay: "3.5s",
          }}
        />
        <div
          className="absolute bottom-1/3 left-1/3 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-primary/12 rounded-full blur-3xl"
          style={{
            animation: "float-slow 7s ease-in-out infinite",
            animationDelay: "1s",
          }}
        />
        {/* Ondas douradas na parte inferior - mais sutis */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1/2"
          style={{
            background: "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(211, 183, 131, 0.08) 0%, rgba(211, 183, 131, 0.04) 40%, transparent 70%)",
            animation: "golden-pulse 3s ease-in-out infinite",
          }}
        />
        {/* Brilho superior com movimento - mais sutil */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/3"
          style={{
            background: "radial-gradient(ellipse 100% 50% at 50% 0%, rgba(211, 183, 131, 0.05) 0%, transparent 60%)",
            animation: "golden-pulse 4s ease-in-out infinite",
            animationDelay: "1s",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-4 sm:mb-6 border border-primary/40 text-xs sm:text-sm backdrop-blur-sm">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="font-medium">Referência em Alta Coquetelaria</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 text-balance leading-tight px-2 sm:px-0 text-white">
              Alta Coquetelaria para{" "}
              <span className="text-primary relative inline-block">
                Eventos Inesquecíveis
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 400 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 10C133.333 3.33333 266.667 3.33333 398 10"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="text-primary"
                  />
                </svg>
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto text-pretty leading-relaxed px-4 sm:px-0">
              Garanta a experiência instagramável do seu casamento com um serviço autoral, ágil e a confiabilidade de
              quem é referência no mercado há mais de 10 anos.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm sm:text-base md:text-lg px-6 py-4 sm:px-8 sm:py-5 md:py-6 shadow-xl hover:shadow-2xl transition-all duration-300 group w-full sm:flex-1 sm:max-w-none"
                onClick={() =>
                  window.location.assign(
                    "/obrigado?origem=whatsapp_orcamento&from=hero",
                  )
                }
              >
                Solicitar Orçamento Premium
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-sm sm:text-base md:text-lg px-6 py-4 sm:px-8 sm:py-5 md:py-6 border-2 border-primary text-white hover:bg-primary hover:text-black transition-all duration-300 bg-black/50 backdrop-blur-sm w-full sm:flex-1 sm:max-w-none"
                onClick={() => document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" })}
              >
                Conheça Nosso Trabalho
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-12 sm:mt-16 md:mt-20 lg:mt-24 transition-all duration-1000 delay-300 transform px-4 sm:px-0 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {[
              { number: "10+", label: "Anos de Experiência" },
              { number: "500+", label: "Eventos Realizados" },
              { number: "100%", label: "Satisfação Garantida" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-black/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-primary/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-xs sm:text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
