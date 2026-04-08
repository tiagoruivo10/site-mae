"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

const WHATSAPP_NUMBER = "5514981331932"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/images/logo.png" 
            alt="Fabi Costurices Logo" 
            width={40} 
            height={40} 
            className="rounded-full object-cover"
          />
          <span className="font-serif text-xl font-semibold text-primary">Fabi Costurices</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Início
          </Link>
          <Link href="#produtos" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Produtos
          </Link>
          <Link href="#sobre" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Sobre
          </Link>
          <Link href="#contato" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Contato
          </Link>
        </nav>

        {/* Desktop CTA */}
        <Button asChild variant="outline" className="hidden md:flex border-primary text-primary hover:bg-primary hover:text-white">
          <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">
            Fale Conosco
          </a>
        </Button>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background">
          <nav className="container mx-auto flex flex-col gap-4 px-4 py-4">
            <Link 
              href="/" 
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Início
            </Link>
            <Link 
              href="#produtos" 
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Produtos
            </Link>
            <Link 
              href="#sobre" 
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sobre
            </Link>
            <Link 
              href="#contato" 
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contato
            </Link>
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Fale Conosco
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
