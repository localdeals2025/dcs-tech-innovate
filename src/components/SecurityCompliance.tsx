import { Shield, Lock, FileCheck, AlertCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import securityImage from "@/assets/security-shield.jpg";

const SecurityCompliance = () => {
  const securityFeatures = [
    "End-to-end encryption for data in transit and at rest",
    "Regular security audits and penetration testing",
    "Multi-factor authentication (MFA) implementation",
    "Role-based access control (RBAC)",
    "Automated backup and disaster recovery",
    "24/7 security monitoring and incident response",
    "Secure software development lifecycle (SDLC)",
    "Regular security training for all team members",
  ];

  return (
    <section id="security" className="py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Security & <span className="text-accent">Compliance</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Enterprise-grade security and compliance standards to protect your business and data
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl transform -rotate-3" />
              <img
                src={securityImage}
                alt="Security"
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold">Your Data Security is Our Priority</h3>
            <p className="text-muted-foreground leading-relaxed">
              We understand that security isn't optional—it's fundamental. That's why we've built 
              our entire infrastructure and development processes around industry-leading security 
              practices and compliance standards.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From the initial design phase through deployment and maintenance, security is 
              embedded in everything we do. Our team stays current with the latest threats and 
              implements proactive measures to protect your applications and data.
            </p>
          </div>
        </div>

        <Card className="border-border/50">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Security Measures We Implement</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {securityFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/5 transition-colors"
                >
                  <Shield className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SecurityCompliance;
