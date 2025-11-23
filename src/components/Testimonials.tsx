import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "DCS transformed our outdated systems into a modern, scalable platform. Their team's expertise in cloud architecture was exactly what we needed. The project was delivered on time and exceeded our expectations.",
      author: "Sarah Johnson",
      role: "CTO",
      company: "TechVentures Inc.",
      industry: "Technology",
      rating: 5,
    },
    {
      quote: "Working with DCS on our healthcare platform was a game-changer. They understood our compliance requirements and built a HIPAA-compliant solution that our medical staff loves. Highly recommend their services.",
      author: "Dr. Michael Chen",
      role: "Director of IT",
      company: "HealthFirst Medical Group",
      industry: "Healthcare",
      rating: 5,
    },
    {
      quote: "The AI-powered analytics dashboard DCS built for us has revolutionized our decision-making process. We can now identify trends and opportunities in real-time. Their data science team is top-notch.",
      author: "Emily Rodriguez",
      role: "VP of Operations",
      company: "Global Retailers Corp",
      industry: "E-commerce",
      rating: 5,
    },
    {
      quote: "From initial consultation to post-launch support, DCS demonstrated professionalism and technical excellence. They didn't just code—they became true partners in our digital transformation journey.",
      author: "James Williams",
      role: "CEO",
      company: "Financial Solutions Ltd",
      industry: "Finance",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{ background: 'var(--gradient-mesh)' }} />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="text-accent">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it—hear from businesses that have transformed with DCS
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50 relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-full" />
              
              <CardContent className="p-8 relative">
                <Quote className="w-10 h-10 text-accent/20 mb-4" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-start justify-between pt-4 border-t border-border/50">
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm font-medium text-accent">{testimonial.company}</p>
                  </div>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-semibold">
                    {testimonial.industry}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
