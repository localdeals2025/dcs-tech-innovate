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
                  <h3 className="text-lg font-bold mb-2">Email</h3>
                  <p className="text-muted-foreground">info@dcstechhub.com</p>
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
                  <h3 className="text-lg font-bold mb-2">Phone</h3>
                  <p className="text-muted-foreground">+91 799 3077 132</p>
                  <p className="text-muted-foreground">Mon-Fri 9am-6pm IST</p>
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
                  <h3 className="text-lg font-bold mb-2">Address</h3>
                  <p className="text-muted-foreground">T-Hub 2.0, HITECH City</p>
                  <p className="text-muted-foreground">Hyderabad 500032, IN</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Our Footprint Section */}
        <div className="mt-20 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
              <span className="text-accent font-semibold">Global Presence</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Our Global Footprint
            </h3>
            <p className="text-muted-foreground text-lg">
              Serving clients across continents with local expertise
            </p>
          </div>

          <Card className="border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-8">
              <div className="relative w-full h-[400px] md:h-[500px] bg-gradient-to-br from-secondary/20 to-background rounded-xl overflow-hidden">
                
                {/* Professional world map outline */}
              <img 
                src="https://stridefuture.com/wp-content/uploads/map-new.svg"
                alt="World Map"
                  className="absolute inset-0 w-full h-full object-contain opacity-60"
                />

                {/* Location Markers */}
                {[
                  { name: "USA", x: "22%", y: "42%", label: "United States" },
                  { name: "Canada", x: "20%", y: "32%", label: "Canada" },
                  { name: "UK", x: "49%", y: "35%", label: "United Kingdom" },
                  { name: "UAE", x: "60%", y: "46%", label: "United Arab Emirates" },
                  { name: "India", x: "68%", y: "48%", label: "India", isHQ: true },
                  { name: "Australia", x: "80%", y: "70%", label: "Australia" }
                ].map((location, index) => (
                  <div
                    key={location.name}
                    className="absolute group cursor-pointer"
                    style={{ 
                      left: location.x, 
                      top: location.y,
                      animation: `fade-in 0.6s ease-out ${index * 0.15}s both`
                    }}
                  >
                    {/* Outer pulse ring */}
                    <div className={`absolute inset-0 ${location.isHQ ? 'w-8 h-8 -left-4 -top-4' : 'w-6 h-6 -left-3 -top-3'} rounded-full bg-accent/20 animate-ping`} />
                    
                    {/* Marker dot */}
                    <div className={`relative ${location.isHQ ? 'w-4 h-4' : 'w-3 h-3'} rounded-full bg-accent shadow-lg shadow-accent/50 border-2 border-background transition-transform group-hover:scale-125`}>
                      {location.isHQ && (
                        <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-primary animate-pulse" />
                      )}
                    </div>
                    
                    {/* Location label */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="bg-card border border-border/50 px-2 py-1 rounded-lg shadow-lg backdrop-blur-sm whitespace-nowrap">
                        <p className="text-xs font-semibold text-foreground">{location.label}</p>
                        {location.isHQ && (
                          <p className="text-xs text-accent">Headquarters</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Location Legend */}
              <div className="grid grid-cols-2 md:grid-cols-6 gap-3 mt-6">
                {[
                  { name: "USA", flag: "🇺🇸" },
                  { name: "Canada", flag: "🇨🇦" },
                  { name: "UK", flag: "🇬🇧" },
                  { name: "UAE", flag: "🇦🇪" },
                  { name: "India", flag: "🇮🇳", isHQ: true },
                  { name: "Australia", flag: "🇦🇺" }
                ].map((location) => (
                  <div
                    key={location.name}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-colors ${
                      location.isHQ 
                        ? 'bg-accent/10 border-accent/30' 
                        : 'bg-secondary/50 border-border/30 hover:bg-secondary/80'
                    }`}
                  >
                    <span className="text-2xl">{location.flag}</span>
                    <span className="text-sm font-medium">{location.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;