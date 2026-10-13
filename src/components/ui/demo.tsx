import { TiltedGridHero } from "@/components/ui/tilted-grid-hero";

// Automotive workshop and disorganized repair orders theme
const IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1200&q=80",
    alt: "Oficina mecânica com ordens de serviço e ferramentas",
  },
  {
    src: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?auto=format&fit=crop&w=1200&q=80",
    alt: "Bancada e ferramentas mecânicas desorganizadas",
  },
  {
    src: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=80",
    alt: "Diagnóstico automotivo e motor de veículo",
  },
  {
    src: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80",
    alt: "Centro automotivo em manutenção",
  },
  {
    src: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1200&q=80",
    alt: "Revisão e mecânica automotiva de alta performance",
  },
  {
    src: "https://images.unsplash.com/photo-1613214149922-f1809c99b414?auto=format&fit=crop&w=1200&q=80",
    alt: "Peças automotivas e estoque de oficina",
  },
  {
    src: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1200&q=80",
    alt: "Oficina e serviços veiculares",
  },
  {
    src: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&w=1200&q=80",
    alt: "Área de manutenção e ordens de serviço",
  },
];

export default function TiltedGridHeroDemo() {
  return (
    <TiltedGridHero
      images={IMAGES}
      className="h-[560px] w-full rounded-lg border border-border bg-background"
    >
      <div className="relative z-10 flex h-full flex-col items-center justify-between py-12 text-center">
        <div className="px-6">
          <h1 className="text-balance text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
            Controle total da sua oficina
          </h1>
        </div>
        <p className="max-w-md text-balance px-6 text-sm text-muted-foreground">
          Ordens de serviço integradas, peças e financeiro em um único fluxo ágil.
        </p>
      </div>
    </TiltedGridHero>
  );
}
