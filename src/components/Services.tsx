import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Sparkles, BarChart3, Shield, Cloud, Code } from "lucide-react";

const services = [
  {
    icon: MessageSquare,
    title: "IT Consulting",
    description: "Expert guidance to optimize your technology stack, streamline operations, and make strategic technology decisions that drive business growth."
  },
  {
    icon: Sparkles,
    title: "Generative AI Solutions",
    description: "Harness the power of AI to automate workflows, enhance creativity, and unlock new business value through intelligent systems."
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Transform raw data into actionable insights with advanced analytics, visualization, and business intelligence solutions."
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your systems, data, and digital infrastructure from evolving threats."
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Expert cloud setup, migration, and optimization services to enhance scalability, reduce costs, and improve performance."
  },
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Bespoke applications tailored to your exact requirements, built with cutting-edge technologies and best practices."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="absolute inset-0 opacity-40" style={{ background: 'var(--gradient-mesh)' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
            <span className="text-accent font-semibold">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Comprehensive Technology
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From strategic consulting to cutting-edge development, we deliver end-to-end solutions 
            that empower your business to thrive in the digital age.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="mb-6 inline-flex p-4 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 group-hover:from-accent/30 group-hover:to-primary/30 transition-all">
                  <service.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-accent text-sm font-semibold hover:underline inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  Learn More →
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;