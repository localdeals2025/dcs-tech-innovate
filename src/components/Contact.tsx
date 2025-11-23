import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-secondary via-background to-background relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
            <span className="text-accent font-semibold">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Digital Journey?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's discuss how we can help transform your business with our technology solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-background/50"
                    required
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email *"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-background/50"
                    required
                  />
                </div>
                <div>
                  <Input
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-background/50"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your project *"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-background/50 min-h-[150px]"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  size="lg"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all">
              <CardContent className="p-6 flex gap-4">
                <div className="flex-shrink-0">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Email Us</h3>
                  <p className="text-muted-foreground">info@dcs-tech.com</p>
                  <p className="text-muted-foreground">sales@dcs-tech.com</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all">
              <CardContent className="p-6 flex gap-4">
                <div className="flex-shrink-0">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Call Us</h3>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  <p className="text-muted-foreground">Mon-Fri 9am-6pm EST</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all">
              <CardContent className="p-6 flex gap-4">
                <div className="flex-shrink-0">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Visit Us</h3>
                  <p className="text-muted-foreground">123 Technology Drive</p>
                  <p className="text-muted-foreground">San Francisco, CA 94105</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;