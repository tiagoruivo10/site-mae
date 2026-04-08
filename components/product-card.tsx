import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { MessageCircle } from "lucide-react"

interface ProductCardProps {
  title: string
  description: string
  image: string
  whatsappNumber: string
}

export function ProductCard({ title, description, image, whatsappNumber }: ProductCardProps) {
  const whatsappMessage = encodeURIComponent(`Olá! Tenho interesse no produto: ${title}`)
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <Card className="group overflow-hidden border-border/50 bg-card transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1">
      <CardHeader className="p-0">
        <div className="relative aspect-square overflow-hidden bg-muted">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="mb-2 font-serif text-lg font-semibold text-card-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full gap-2" variant="default">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-4 w-4" />
            Encomendar via WhatsApp
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}
