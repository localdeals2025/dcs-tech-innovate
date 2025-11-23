import { ArrowUpRight, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const CaseStudies = () => {
  const caseStudies = [
    {
      industry: "Healthcare Technology",
      client: "Regional Hospital Network",
      challenge: "Fragmented patient data across multiple systems causing delays and inefficiencies",
      solution: "Developed unified EMR system with real-time data synchronization and AI-powered diagnostics support",
      results: [
        { metric: "40%", description: "Reduction in patient wait times" },
        { metric: "60%", description: "Improvement in data accuracy" },
        { metric: "25%", description: "Increase in patient satisfaction" },
      ],
      color: "from-blue-500/10 to-cyan-500/10",
    },
    {
      industry: "Financial Services",
      client: "Investment Management Firm",
      challenge: "Legacy trading platform unable to handle increased transaction volumes",
      solution: "Built cloud-native trading platform with real-time analytics and automated risk management",
      results: [
        { metric: "10x", description: "Transaction processing speed" },
        { metric: "99.99%", description: "Platform uptime achieved" },
        { metric: "$2M", description: "Annual cost savings" },
      ],
      color: "from-green-500/10 to-emerald-500/10",
    },
    {
      industry: "E-commerce Retail",
      client: "Multi-Brand Retailer",
      challenge: "Poor user experience and high cart abandonment rates",
      solution: "Redesigned platform with AI recommendations and streamlined checkout process",
      results: [
        { metric: "65%", description: "Reduction in cart abandonment" },
        { metric: "150%", description: "Increase in mobile conversions" },
        { metric: "3x", description: "Growth in customer retention" },
      ],
      color: "from-purple-500/10 to-pink-500/10",
    },
  ];

  return (
    <section id="case-studies" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Success <span className="text-accent">Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real results for real clients across diverse industries
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`h-2 bg-gradient-to-r ${study.color}`} />
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-semibold">
                    {study.industry}
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>

                <h3 className="text-lg font-semibold mb-2">{study.client}</h3>

                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-xs font-semibold text-destructive mb-1">Challenge</p>
                    <p className="text-sm text-muted-foreground">{study.challenge}</p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-accent mb-1">Solution</p>
                    <p className="text-sm text-muted-foreground">{study.solution}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-border/50">
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="w-4 h-4 text-accent" />
                    <p className="text-xs font-semibold text-accent">Key Results</p>
                  </div>
                  <div className="space-y-2">
                    {study.results.map((result, rIndex) => (
                      <div key={rIndex} className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-accent">{result.metric}</span>
                        <span className="text-xs text-muted-foreground">{result.description}</span>
                      </div>
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

export default CaseStudies;
