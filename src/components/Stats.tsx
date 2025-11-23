import { useEffect, useState } from "react";
import { Building2, Users, Award, Globe } from "lucide-react";

const Stats = () => {
  const [counts, setCounts] = useState({
    years: 0,
    projects: 0,
    satisfaction: 0,
    industries: 0,
  });

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const targets = {
      years: 15,
      projects: 500,
      satisfaction: 98,
      industries: 12,
    };

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      setCounts({
        years: Math.floor(targets.years * progress),
        projects: Math.floor(targets.projects * progress),
        satisfaction: Math.floor(targets.satisfaction * progress),
        industries: Math.floor(targets.industries * progress),
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts(targets);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      icon: Award,
      value: counts.years,
      suffix: "+",
      label: "Years of Excellence",
      color: "text-accent",
    },
    {
      icon: Building2,
      value: counts.projects,
      suffix: "+",
      label: "Projects Completed",
      color: "text-accent",
    },
    {
      icon: Users,
      value: counts.satisfaction,
      suffix: "%",
      label: "Client Satisfaction",
      color: "text-accent",
    },
    {
      icon: Globe,
      value: counts.industries,
      suffix: "+",
      label: "Industries Served",
      color: "text-accent",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary/90 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ background: 'var(--gradient-mesh)' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
              </div>
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-primary-foreground/80 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
