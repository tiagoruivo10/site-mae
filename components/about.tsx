import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, Sparkles, HandHeart } from "lucide-react"

export function About() {
  return (
    <section id="sobre" className="py-20 bg-secondary/30">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Logo */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-sm aspect-square">
              <Image
                src="/images/logo.png"
                alt="Fabi Santarem Costurices"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 400px"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="mb-6 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Nossa História
            </h2>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                A <strong className="text-foreground">Fabi Costurices</strong> nasceu do amor pelo trabalho manual e da paixão por criar peças únicas e especiais.
              </p>
              <p>
                Tudo começou quando Fabi, após anos trabalhando com costura, decidiu transformar seu hobby em um pequeno negócio. Com as técnicas aprendidas ao longo dos anos, ela começou a criar peças para sua própria casa e para amigos próximos.
              </p>
              <p>
                Cada produto é único e carrega consigo a tradição e o carinho do trabalho manual. Nosso objetivo é levar mais aconchego e beleza para a sua casa através do artesanato brasileiro.
              </p>
            </div>

            {/* Features */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Heart className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">Feito com amor</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">Peças únicas</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <HandHeart className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">Artesanal</span>
              </div>
            </div>

            <Button asChild className="mt-8" variant="outline">
              <Link href="#contato">
                Saiba mais sobre nós
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
