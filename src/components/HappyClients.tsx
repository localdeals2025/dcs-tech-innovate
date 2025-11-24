import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const clients = [
  { name: "KB Tech", logo: "https://stridefuture.com/wp-content/uploads/KB-Tech-1.png" },
  { name: "Client 2", logo: "https://stridefuture.com/wp-content/uploads/image-38.png" },
  { name: "Client 3", logo: "https://stridefuture.com/wp-content/uploads/image-41.png" },
  { name: "Maktech", logo: "https://stridefuture.com/wp-content/uploads/Maktech-2.png" },
  { name: "GERP", logo: "https://stridefuture.com/wp-content/uploads/GERP-1.png" },
  { name: "Convoltech", logo: "https://stridefuture.com/wp-content/uploads/correct-convoltech-2.webp" },
  { name: "Client 7", logo: "https://stridefuture.com/wp-content/uploads/image-39.png" },
  { name: "Client 8", logo: "https://stridefuture.com/wp-content/uploads/image-44.png" },
  { name: "Technocare", logo: "https://stridefuture.com/wp-content/uploads/technocare-1.webp" },
  { name: "Ensoft Pro", logo: "https://stridefuture.com/wp-content/uploads/Ensoft-Pro.webp" },
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
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="max-h-20 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
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
