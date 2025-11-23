import { Linkedin, Twitter, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ background: 'var(--gradient-mesh)' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary-foreground to-accent bg-clip-text text-transparent">
              DCS
            </h3>
            <p className="text-primary-foreground/80 mb-4">
              Transforming businesses through innovative technology solutions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#services" className="hover:text-accent transition-colors">IT Consulting</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">AI Solutions</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Data Analytics</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Cybersecurity</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#why-us" className="hover:text-accent transition-colors">Why Choose DCS</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-primary-foreground/60">
            © {currentYear} DCS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;