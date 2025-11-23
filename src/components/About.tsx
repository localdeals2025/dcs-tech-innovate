import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Target, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 opacity-30" style={{ background: 'var(--gradient-mesh)' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block mb-4 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
              <span className="text-accent font-semibold">About DCS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Building the Future of
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Digital Business
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At DCS, we're passionate about leveraging technology to solve complex business challenges. 
              Our team of experts brings together deep technical knowledge, industry experience, and 
              a commitment to excellence.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you're looking to modernize legacy systems, implement AI solutions, or build 
              custom applications, we have the expertise and dedication to turn your vision into reality.
            </p>
          </div>

          <div className="space-y-6">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all">
              <CardContent className="p-6 flex gap-4">
                <div className="flex-shrink-0">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20">
                    <Target className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                  <p className="text-muted-foreground">
                    Empower businesses through innovative technology solutions that drive growth, 
                    efficiency, and competitive advantage.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all">
              <CardContent className="p-6 flex gap-4">
                <div className="flex-shrink-0">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20">
                    <Lightbulb className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Our Approach</h3>
                  <p className="text-muted-foreground">
                    We combine strategic thinking with technical excellence, focusing on solutions 
                    that deliver measurable business value.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all">
              <CardContent className="p-6 flex gap-4">
                <div className="flex-shrink-0">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20">
                    <TrendingUp className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Our Commitment</h3>
                  <p className="text-muted-foreground">
                    Dedicated to your success with transparent communication, agile delivery, 
                    and continuous improvement.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;