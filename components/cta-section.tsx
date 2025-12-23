"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Phone } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function CTASection() {
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
    <section
      id="contato"
      ref={sectionRef}
      className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-5 sm:left-10 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-10 right-5 sm:right-10 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-accent/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-5 md:mb-6 text-balance px-4 sm:px-0">
            Garanta o Sucesso do Seu <span className="text-primary">Evento Premium</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 sm:mb-8 max-w-3xl mx-auto px-4 sm:px-0">
            Não arrisque o sucesso do seu evento com amadorismo ou falta de planejamento. Garanta a tranquilidade de
            contratar uma empresa com mais de <strong className="text-foreground">10 anos de autoridade</strong>,
            formalidade total e uma equipe treinada para manter a energia da sua pista do início ao fim.
          </p>

          <div className="bg-card/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl border border-border mb-8 sm:mb-10 md:mb-12">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-5 md:mb-6">O Que Você Recebe:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-left mb-6 sm:mb-8">
              {[
                "Orçamento detalhado e transparente",
                "Degustação exclusiva de drinks",
                "Consultoria personalizada",
                "Cardápio autoral exclusivo",
                "Equipe profissional treinada",
                "Nota fiscal e contrato formal",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="bg-primary/10 rounded-full p-1 mt-1">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm sm:text-base md:text-lg px-6 py-4 sm:px-8 sm:py-5 md:py-6 shadow-xl hover:shadow-2xl transition-all duration-300 group w-full sm:w-auto"
                onClick={() =>
                  window.location.assign(
                    "/obrigado?origem=whatsapp_orcamento&from=cta",
                  )
                }
              >
                <Phone className="mr-2 w-5 h-5" />
                Solicitar Orçamento Premium
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-6">
              <Phone className="w-4 h-4 inline mr-1" />
              Telefone: (14) 99899-5596
            </p>
          </div>

          <p className="text-muted-foreground">
            Fale agora com um de nossos consultores e receba um orçamento detalhado com a segurança que seu investimento
            exige.
          </p>
        </div>
      </div>
    </section>
  )
}
