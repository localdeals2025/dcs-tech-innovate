import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import heroImage from "@/assets/hero-bg.jpg";
import heroAi from "@/assets/hero-ai.jpg";
import heroCloud from "@/assets/hero-cloud.jpg";
import heroSoftware from "@/assets/hero-software.jpg";

const slides = [
  {
    image: heroImage,
    badge: "Enterprise Technology Solutions",
    title: "Transform Your Business with",
    highlight: "Cutting-Edge Technology",
    description: "DCS delivers comprehensive IT consulting, AI solutions, and software development services to drive innovation and accelerate your digital transformation."
  },
  {
    image: heroAi,
    badge: "AI & Innovation",
    title: "Unlock the Power of",
    highlight: "Artificial Intelligence",
    description: "Harness generative AI and machine learning to automate workflows, enhance decision-making, and create intelligent solutions that drive business value."
  },
  {
    image: heroCloud,
    badge: "Cloud & Digital Transformation",
    title: "Accelerate Growth with",
    highlight: "Cloud Solutions",
    description: "Modernize your infrastructure with scalable cloud architecture, seamless migration services, and optimization strategies that reduce costs and boost performance."
  },
  {
    image: heroSoftware,
    badge: "Custom Development",
    title: "Build Exceptional Software",
    highlight: "Tailored to Your Needs",
    description: "From concept to deployment, we create custom applications with cutting-edge technologies that solve your unique business challenges and exceed expectations."
  }
];

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="w-full h-full"
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative min-h-screen flex items-center justify-center">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={slide.image} 
                    alt={`${slide.badge} background`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-accent/80" />
                </div>

                {/* Animated Gradient Mesh */}
                <div className="absolute inset-0 z-0 opacity-30" style={{ background: 'var(--gradient-mesh)' }} />

                {/* Content */}
                <div className="container mx-auto px-6 py-32 relative z-10">
                  <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-block mb-6 px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full border border-accent/30 animate-fade-in">
                      <span className="text-accent-foreground font-semibold">{slide.badge}</span>
                    </div>
                    
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
                      {slide.title}
                      <span className="block bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent mt-2">
                        {slide.highlight}
                      </span>
                    </h1>
                    
                    <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 leading-relaxed max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
                      {slide.description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
                      <Button 
                        onClick={scrollToContact}
                        size="lg" 
                        className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 shadow-accent"
                      >
                        Start Your Project
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                      <Button 
                        onClick={scrollToServices}
                        size="lg" 
                        variant="outline"
                        className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 backdrop-blur-sm text-lg px-8 py-6"
                      >
                        Explore Services
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 md:left-8 bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 backdrop-blur-sm" />
        <CarouselNext className="right-4 md:right-8 bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 backdrop-blur-sm" />
      </Carousel>
    </section>
  );
};

export default Hero;
