import { Heart, DollarSign, ShoppingCart, Factory, GraduationCap, Cpu } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import healthcareImage from "@/assets/healthcare-tech.jpg";
import financeImage from "@/assets/finance-platform.jpg";

const Industries = () => {
  const industries = [
    {
      icon: Heart,
      title: "Healthcare",
      description: "HIPAA-compliant solutions for patient management, telemedicine, and health analytics",
      image: healthcareImage,
      solutions: ["EMR Systems", "Patient Portals", "Telehealth Platforms"],
    },
    {
      icon: DollarSign,
      title: "Finance",
      description: "Secure fintech solutions for banking, payments, and investment management",
      image: financeImage,
      solutions: ["Trading Platforms", "Payment Gateways", "Risk Analytics"],
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      description: "Scalable platforms for online retail, marketplaces, and digital commerce",
      solutions: ["Custom Storefronts", "Inventory Management", "Payment Integration"],
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "IoT and automation solutions for production optimization and supply chain",
      solutions: ["IoT Integration", "ERP Systems", "Supply Chain Tools"],
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Learning management systems and educational technology platforms",
      solutions: ["LMS Platforms", "Virtual Classrooms", "Student Analytics"],
    },
    {
      icon: Cpu,
      title: "Technology",
      description: "Advanced software solutions for tech companies and startups",
      solutions: ["SaaS Products", "API Development", "Cloud Migration"],
    },
  ];

  return (
    <section id="industries" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Industries We <span className="text-accent">Serve</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Deep domain expertise across multiple sectors, delivering tailored solutions that address specific industry challenges
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image header for featured industries */}
              {industry.image && (
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                </div>
              )}

              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <industry.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{industry.title}</h3>
                    <p className="text-muted-foreground text-sm">{industry.description}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-border/50">
                  <p className="text-xs font-semibold text-accent mb-2">Key Solutions:</p>
                  <div className="flex flex-wrap gap-2">
                    {industry.solutions.map((solution, sIndex) => (
                      <span
                        key={sIndex}
                        className="px-2 py-1 bg-accent/10 text-accent rounded text-xs"
                      >
                        {solution}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
