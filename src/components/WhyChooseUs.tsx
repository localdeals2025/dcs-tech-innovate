import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Users, Zap, Award } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Proven Expertise",
    description: "Years of experience delivering successful projects across diverse industries and technologies.",
    metric: "500+ Projects",
  },
  {
    icon: Users,
    title: "Client-Centric Approach",
    description: "We prioritize your business goals and work collaboratively to ensure your success.",
    metric: "98% Satisfaction",
  },
  {
    icon: Zap,
    title: "Cutting-Edge Innovation",
    description: "Stay ahead with the latest technologies, methodologies, and industry best practices.",
    metric: "Latest Tech Stack",
  },
  {
    icon: CheckCircle2,
    title: "End-to-End Support",
    description: "From consultation to implementation and ongoing support, we're with you every step.",
    metric: "24/7 Available",
  }
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-24 bg-gradient-to-br from-secondary via-background to-background relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
            <span className="text-accent font-semibold">Why Choose DCS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Trusted Technology
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Partner
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We combine technical excellence with business acumen to deliver solutions 
            that drive real, measurable results for your organization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <Card 
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border/50 bg-card hover:scale-105"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 inline-flex p-4 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 group-hover:from-accent/30 group-hover:to-primary/30 transition-all">
                  <reason.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {reason.description}
                </p>
                <div className="pt-4 border-t border-border/50">
                  <span className="text-accent font-semibold text-sm">{reason.metric}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;