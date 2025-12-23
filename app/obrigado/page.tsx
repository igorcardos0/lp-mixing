"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { CheckCircle2 } from "lucide-react"
import Link from "next/link"

const DESTINOS: Record<
  string,
  {
    url: string
    titulo: string
    descricao: string
  }
> = {
  whatsapp_orcamento: {
    url: "https://wa.me/5514998995596",
    titulo: "Obrigado! Estamos preparando seu atendimento no WhatsApp",
    descricao:
      "Em alguns instantes o WhatsApp será aberto para você falar diretamente com nossa equipe e receber um orçamento detalhado para o seu evento.",
  },
  whatsapp_header: {
    url: "https://wa.me/5514998995596",
    titulo: "Obrigado pelo interesse na Mixing Coquetelaria",
    descricao:
      "Vamos te levar agora para o WhatsApp, onde você poderá tirar dúvidas rápidas e alinhar os próximos passos do seu evento.",
  },
  instagram: {
    url: "https://instagram.com/mixingcoquetelaria",
    titulo: "Obrigado por acompanhar nosso trabalho no Instagram",
    descricao:
      "Você será redirecionado para o nosso perfil no Instagram para ver fotos reais de eventos, bastidores e inspirações de coquetelaria.",
  },
}

export default function ObrigadoPage() {
  const searchParams = useSearchParams()
  const [segundosRestantes, setSegundosRestantes] = useState(5)

  const origem = searchParams.get("origem") ?? "whatsapp_orcamento"
  const destino = DESTINOS[origem] ?? DESTINOS.whatsapp_orcamento

  useEffect(() => {
    // Contador regressivo
    const interval = setInterval(() => {
      setSegundosRestantes((prev) => {
        if (prev <= 1) {
          clearInterval(interval)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    // Redirecionamento após 5 segundos
    const timer = setTimeout(() => {
      window.location.href = destino.url
    }, 5000)

    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [destino.url])

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/20 to-background px-4">
      <div className="max-w-xl w-full bg-card border border-border rounded-3xl shadow-2xl p-8 md:p-10 text-center space-y-6">
        <div className="flex justify-center mb-2">
          <CheckCircle2 className="w-14 h-14 text-primary" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-balance">{destino.titulo}</h1>
        <p className="text-muted-foreground text-lg leading-relaxed">{destino.descricao}</p>

        <div className="pt-4">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-3 rounded-full">
            <span className="text-sm text-muted-foreground">Redirecionando em</span>
            <span className="text-2xl font-bold text-primary tabular-nums">{segundosRestantes}s</span>
          </div>
        </div>

        <div className="pt-4">
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-primary underline-offset-4 hover:underline transition-colors"
          >
            Voltar para o site
          </Link>
        </div>
      </div>
    </main>
  )
}


