import { MapPin, Phone, Clock, Building2 } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <div className="relative h-12 w-48 sm:h-14 sm:w-56 md:h-16 md:w-64 mb-3 sm:mb-4">
              <Image
                src="/mixing-logo.svg"
                alt="Mixing Coquetelaria"
                fill
                className="object-contain"
                loading="lazy"
              />
            </div>
            <p className="text-muted-foreground text-xs sm:text-sm">
              Alta Coquetelaria e Entretenimento Premium para eventos inesquecíveis.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              Contato
            </h4>
            <a
              href="tel:+5514998995596"
              className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer inline-block"
            >
              (14) 99899-5596
            </a>
          </div>

          <div>
            <h4 className="font-bold mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              Endereço
            </h4>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Rua Humaita, 1055
              <br />
              Centro - Jaú, SP
              <br />
              CEP 17201-320
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              Atendimento
            </h4>
            <p className="text-xs sm:text-sm text-muted-foreground">Aberto 24 horas</p>
          </div>
        </div>

        <div className="border-t border-border pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4" />
              <span>CNPJ: 24.477.165/0001-17</span>
            </div>
            <div>© {new Date().getFullYear()} Mixing Coquetelaria. Todos os direitos reservados.</div>
            <div>
              Desenvolvido por <span className="text-primary font-medium">RVC & Co</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
