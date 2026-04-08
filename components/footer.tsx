import Link from "next/link"
import Image from "next/image"
import { Heart, Instagram, Phone } from "lucide-react"

const WHATSAPP_NUMBER = "5514981331932"

export function Footer() {
  return (
    <footer id="contato" className="border-t border-border bg-card py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image 
                src="/images/logo.png" 
                alt="Fabi Costurices Logo" 
                width={40} 
                height={40} 
                className="rounded-full object-cover"
              />
              <span className="font-serif text-xl font-semibold text-primary">Fabi Costurices</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Produtos artesanais feitos com amor e dedicação para deixar sua casa mais bonita e aconchegante.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-serif text-lg font-semibold text-foreground">Links Rápidos</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Início
              </Link>
              <Link href="#produtos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Produtos
              </Link>
              <Link href="#sobre" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Sobre
              </Link>
              <Link href="#contato" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contato
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-serif text-lg font-semibold text-foreground">Contato</h3>
            <div className="flex flex-col gap-3">
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                (14) 98133-1932
              </a>
              <a 
                href="https://www.instagram.com/costuricesdafabi_/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-4 w-4" />
                @costuricesdafabi_
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Fabi Costurices. Todos os direitos reservados.
          </p>
          <p className="mt-2 text-xs text-muted-foreground flex items-center justify-center gap-1">
            Feito por Tiago Ruivo.
          </p>
        </div>
      </div>
    </footer>
  )
} 

