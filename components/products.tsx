import { ProductCard } from "./product-card"

const products = [
  {
    title: "Toalha de Mesa Bordada",
    description: "Toalha de mesa bordada à mão com motivos florais, perfeita para ocasiões especiais.",
    image: "/images/toalha-mesa.jpg",
  },
  {
    title: "Conjunto de Panos de Prato",
    description: "Conjunto com 3 panos de prato decorados com bordados delicados e acabamento em crochê.",
    image: "/images/panos-prato.jpg",
  },
  {
    title: "Almofada Decorativa",
    description: "Almofada decorativa com capa removível e bordados artesanais. Disponível em várias cores.",
    image: "/images/almofada.jpg",
  },
  {
    title: "Tapete de Crochê",
    description: "Tapete redondo de crochê feito com fio de algodão. Ideal para sala ou quarto.",
    image: "/images/tapete.jpg",
  },
  {
    title: "Porta-Guardanapos",
    description: "Conjunto com 4 porta-guardanapos decorativos feitos em crochê com detalhes em pedrarias.",
    image: "/images/porta-guardanapos.jpg",
  },
  {
    title: "Cesto Organizador",
    description: "Cesto organizador feito em crochê com fio de malha. Perfeito para organizar diversos ambientes.",
    image: "/images/cesto.jpg",
  },
]

const WHATSAPP_NUMBER = "5514981331932"

export function Products() {
  return (
    <section id="produtos" className="py-20 bg-background">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
            Nossos Produtos
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Cada peça é única e feita com muito carinho. Escolha a sua favorita e faça sua encomenda!
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.title}
              title={product.title}
              description={product.description}
              image={product.image}
              whatsappNumber={WHATSAPP_NUMBER}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
