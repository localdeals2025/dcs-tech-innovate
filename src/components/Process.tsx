import { Search, Lightbulb, Code, TestTube, Rocket } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: Search,
      number: "01",
      title: "Discovery",
      description: "We begin by understanding your business goals, challenges, and requirements through detailed consultations and analysis.",
    },
    {
      icon: Lightbulb,
      number: "02",
      title: "Strategy",
      description: "Our team develops a comprehensive roadmap, architecture design, and technology stack tailored to your needs.",
    },
    {
      icon: Code,
      number: "03",
      title: "Development",
      description: "Using agile methodologies, we build your solution with iterative sprints, regular updates, and continuous feedback.",
    },
    {
      icon: TestTube,
      number: "04",
      title: "Testing",
      description: "Rigorous quality assurance including unit tests, integration tests, security audits, and performance optimization.",
    },
    {
      icon: Rocket,
      number: "05",
      title: "Launch & Support",
      description: "Smooth deployment to production with ongoing maintenance, monitoring, updates, and technical support.",
    },
  ];

  return (
    <section id="process" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-accent">Process</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A proven methodology that ensures successful project delivery from concept to completion
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 relative">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-accent/20 via-accent to-accent/20" />

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Step number badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent/70 text-white flex items-center justify-center font-bold text-sm z-10 shadow-lg">
                {step.number}
              </div>

              <div className="bg-card border border-border/50 rounded-lg p-6 pt-10 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-full" />

                <div className="relative">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
