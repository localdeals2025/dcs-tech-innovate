import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const clients = [
  { name: "Farehmosaic", logo: "FM" },
  { name: "Life Care Hospitals", logo: "LCH" },
  { name: "Rushi News Daily", logo: "RND" },
  { name: "TechVentures Inc", logo: "TVI" },
  { name: "Global Retailers", logo: "GR" },
  { name: "Financial Solutions", logo: "FS" },
  { name: "Innovation Labs", logo: "IL" },
  { name: "Digital Systems", logo: "DS" },
];

const HappyClients = () => {
  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{ background: 'var(--gradient-mesh)' }} />
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted by <span className="text-accent">Leading Organizations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Partnering with innovative companies worldwide to deliver exceptional results
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {clients.map((client, index) => (
              <CarouselItem key={index} className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="flex items-center justify-center p-8 bg-card rounded-lg border border-border/50 hover:border-accent/30 transition-all h-32">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accent mb-2">{client.logo}</div>
                    <p className="text-sm text-muted-foreground font-medium">{client.name}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default HappyClients;
