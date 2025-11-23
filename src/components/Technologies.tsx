import { Code2, Database, Cloud, Brain, Settings } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Technologies = () => {
  const techCategories = [
    {
      icon: Code2,
      title: "Frontend",
      description: "Modern frameworks and libraries",
      technologies: ["React", "Vue.js", "Angular", "TypeScript", "Next.js", "Tailwind CSS"],
    },
    {
      icon: Database,
      title: "Backend",
      description: "Robust server-side solutions",
      technologies: ["Node.js", "Python", ".NET", "Java", "PHP", "GraphQL"],
    },
    {
      icon: Cloud,
      title: "Cloud Platforms",
      description: "Scalable infrastructure",
      technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"],
    },
    {
      icon: Brain,
      title: "AI & ML",
      description: "Intelligent automation",
      technologies: ["TensorFlow", "PyTorch", "OpenAI", "LangChain", "Hugging Face", "Stable Diffusion"],
    },
    {
      icon: Settings,
      title: "DevOps",
      description: "Continuous delivery pipeline",
      technologies: ["Jenkins", "GitLab CI", "GitHub Actions", "CircleCI", "Ansible", "Prometheus"],
    },
  ];

  return (
    <section id="technologies" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technologies & <span className="text-accent">Tools</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We leverage cutting-edge technologies to build scalable, secure, and high-performance solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <category.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{category.description}</p>
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium hover:bg-accent/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
