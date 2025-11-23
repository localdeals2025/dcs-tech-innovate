import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is your typical project timeline?",
      answer: "Project timelines vary based on scope and complexity. A simple web application might take 8-12 weeks, while enterprise solutions can range from 4-9 months. We provide detailed timelines during the discovery phase and use agile methodologies to deliver iterative results, so you see progress throughout the project.",
    },
    {
      question: "How do you price your services?",
      answer: "We offer flexible pricing models including fixed-price projects, time and materials, and dedicated team arrangements. After understanding your requirements, we provide a detailed proposal with transparent pricing. We also offer monthly payment plans for larger projects to ease budget management.",
    },
    {
      question: "What technologies and platforms do you specialize in?",
      answer: "We work with a wide range of modern technologies including React, Node.js, Python, .NET, cloud platforms (AWS, Azure, Google Cloud), AI/ML frameworks, and mobile development. Our team stays current with emerging technologies and selects the best stack for your specific needs rather than forcing a one-size-fits-all approach.",
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Absolutely. We offer comprehensive support packages including bug fixes, security updates, performance monitoring, feature enhancements, and technical support. Our support options range from basic maintenance to full managed services with 24/7 monitoring and rapid response times.",
    },
    {
      question: "How do you ensure project quality and security?",
      answer: "Quality and security are embedded in our process. We follow secure coding practices, conduct regular code reviews, perform automated and manual testing, and conduct security audits. All projects include comprehensive testing phases, and we're compliant with ISO 27001, SOC 2, and GDPR standards.",
    },
    {
      question: "Can you scale my team if project needs change?",
      answer: "Yes, we offer flexible team scaling. Whether you need to ramp up for a major release or scale down during maintenance phases, we can adjust team size within 1-2 weeks. This flexibility is one of the key benefits of partnering with DCS rather than building an in-house team.",
    },
    {
      question: "How do you handle communication during projects?",
      answer: "We prioritize transparent, regular communication. You'll have a dedicated project manager as your main point of contact. We use tools like Slack, Microsoft Teams, or your preferred platform for daily communication, hold weekly status meetings, and provide access to project management tools where you can track progress in real-time.",
    },
    {
      question: "What industries do you have experience in?",
      answer: "We've successfully delivered projects across 12+ industries including healthcare, finance, e-commerce, manufacturing, education, and technology. Our team includes domain experts who understand industry-specific challenges, compliance requirements, and best practices, ensuring solutions that truly fit your sector.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="text-accent">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Get answers to common questions about working with DCS
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border/50 rounded-lg px-6 hover:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold pr-4">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center p-8 bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl border border-border/50">
          <p className="text-lg mb-2">Still have questions?</p>
          <p className="text-muted-foreground mb-4">
            We're here to help. Contact us for a free consultation.
          </p>
          <a
            href="#contact"
            className="text-accent font-semibold hover:underline"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Get in touch →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
