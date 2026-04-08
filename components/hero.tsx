import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-secondary/50 py-16 md:py-24">
      <div className="container relative mx-auto max-w-6xl px-4">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-left">
            <h1 className="mb-6 font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
              Costura Feita com{" "}
              <span className="text-primary">Amor</span>
            </h1>
            
            <p className="mb-8 max-w-xl text-lg text-muted-foreground text-pretty">
              Produtos artesanais únicos e personalizados para tornar sua casa mais aconchegante e especial.
            </p>
            
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="#produtos">
                  Ver Produtos
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
                <Link href="#sobre">
                  Conheça Nossa História
                </Link>
              </Button>
            </div>
          </div>

          {/* Logo Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-square">
              <Image
                src="/images/logo.png"
                alt="Fabi Santarem Costurices"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 400px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
