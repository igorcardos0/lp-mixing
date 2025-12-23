"use client"

import { useEffect, useRef, useState } from "react"
import { Camera, Zap, ShieldCheck, Star, Sparkles, Users } from "lucide-react"
import Image from "next/image"

export function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      icon: Camera,
      title: "Experiência 100% Instagramável",
      description:
        "Cada drink é projetado para ser uma obra de arte visual. Criamos cenários e coquetéis que seus convidados farão questão de fotografar e compartilhar.",
      color: "text-primary",
      bgColor: "bg-primary/10",
      image: "/foto-feature-1.jpg",
    },
    {
      icon: Zap,
      title: "Agilidade Minimalista (Sem Filas)",
      description:
        "Nosso método de trabalho foca em eficiência. Drinks complexos entregues com rapidez para que ninguém perca tempo em filas e a energia da festa nunca caia.",
      color: "text-accent",
      bgColor: "bg-accent/10",
      image: "/foto-feature-2.jpg",
    },
    {
      icon: ShieldCheck,
      title: "Segurança Técnica e Formalidade",
      description:
        "Somos uma empresa estruturada. Trabalhamos apenas com insumos de procedência garantida, nota fiscal e contratos que dão tranquilidade jurídica aos noivos e organizadores.",
      color: "text-primary",
      bgColor: "bg-primary/10",
      image: "/foto-feature-3.jpg",
    },
    {
      icon: Star,
      title: "Autoridade Reconhecida",
      description:
        "Não somos apenas nós que dizemos; somos o bar-referência indicado pelas principais cerimonialistas da região, comprovado por uma década de eventos de alto padrão realizados com sucesso.",
      color: "text-accent",
      bgColor: "bg-accent/10",
      image: "/foto-feature-4.jpg",
    },
    {
      icon: Sparkles,
      title: "Consultoria Autoral",
      description:
        "Não entregamos um cardápio pronto. Criamos uma carta de drinks que reflete a personalidade do seu evento, garantindo exclusividade do início ao fim.",
      color: "text-primary",
      bgColor: "bg-primary/10",
      image: "/foto-feature-5.jpg",
    },
    {
      icon: Users,
      title: "Equipe Especializada e Atendimento Personalizado",
      description:
        "Nossa equipe é composta por profissionais altamente qualificados e treinados. Oferecemos um atendimento personalizado que se adapta às necessidades específicas do seu evento, garantindo que cada detalhe seja perfeito.",
      color: "text-accent",
      bgColor: "bg-accent/10",
      image: "/foto-feature-1.jpg",
    },
  ]

  return (
    <section id="diferenciais" ref={sectionRef} className="py-16 sm:py-20 md:py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 sm:w-1/3 h-1/2 sm:h-1/3 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/2 sm:w-1/3 h-1/2 sm:h-1/3 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-10 sm:mb-12 md:mb-16 transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-balance px-4 sm:px-0">
            Por Que Escolher a <span className="text-primary">Mixing Coquetelaria?</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty px-4 sm:px-0">
            Diferenciais que fazem do seu evento uma experiência memorável
          </p>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-primary mx-auto rounded-full mt-4 sm:mt-6" />
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-card rounded-xl sm:rounded-2xl overflow-hidden border border-border hover:border-primary transition-all duration-300 hover:shadow-2xl group h-full">
                <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden">
                  <Image
                    src={feature.image || "/imagem-placeholder.svg"}
                    alt={feature.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                </div>
                <div className="p-5 sm:p-6 md:p-8">
                  <div
                    className={`${feature.bgColor} w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-5 md:mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <feature.icon className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 ${feature.color}`} />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-balance">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
