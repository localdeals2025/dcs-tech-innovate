import { Target, Zap, Shield, Users } from "lucide-react";
import teamImage from "@/assets/team-collaboration.jpg";

const TeamExpertise = () => {
  const values = [
    {
      icon: Target,
      title: "Client-Focused",
      description: "Your success is our priority. We partner with you to understand your vision and deliver solutions that exceed expectations.",
    },
    {
      icon: Zap,
      title: "Innovation-Driven",
      description: "We stay ahead of technology trends, continuously exploring new tools and methodologies to give you a competitive edge.",
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description: "Every line of code is crafted with precision. Our rigorous testing ensures reliable, secure, and high-performance solutions.",
    },
    {
      icon: Users,
      title: "Collaborative Approach",
      description: "We believe in transparency and partnership. You're involved at every stage with regular updates and open communication.",
    },
  ];

  return (
    <section id="team" className="py-24 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meet Our <span className="text-accent">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A diverse group of technology experts dedicated to transforming your ideas into reality
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl transform rotate-3" />
            <img
              src={teamImage}
              alt="DCS Team"
              className="relative rounded-2xl shadow-2xl w-full h-[400px] object-cover"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold">Building Tomorrow's Solutions Today</h3>
            <p className="text-muted-foreground leading-relaxed">
              Founded in 2009, DCS has grown from a small consulting firm to a full-service technology partner 
              trusted by businesses worldwide. Our team of 50+ experts brings together decades of combined 
              experience in software development, cloud architecture, artificial intelligence, and cybersecurity.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              What sets us apart is our commitment to understanding your business first. Technology is our tool, 
              but your success is our mission. We don't just build software—we craft solutions that drive growth, 
              improve efficiency, and create lasting value.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-4">
              <div>
                <div className="text-3xl font-bold text-accent mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Expert Team Members</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-1">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-1">12+</div>
                <div className="text-sm text-muted-foreground">Industries Covered</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-accent" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamExpertise;
