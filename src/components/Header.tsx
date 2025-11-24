import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            DCS
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('services')} className="text-foreground/80 hover:text-accent transition-colors text-sm font-medium">
              Services
            </button>
            <button onClick={() => scrollToSection('industries')} className="text-foreground/80 hover:text-accent transition-colors text-sm font-medium">
              Industries
            </button>
            <button onClick={() => scrollToSection('team')} className="text-foreground/80 hover:text-accent transition-colors text-sm font-medium">
              About
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-foreground/80 hover:text-accent transition-colors text-sm font-medium">
              Contact
            </button>
            <Button onClick={() => scrollToSection('contact')} className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button onClick={() => scrollToSection('services')} className="text-foreground/80 hover:text-accent transition-colors text-left">
              Services
            </button>
            <button onClick={() => scrollToSection('industries')} className="text-foreground/80 hover:text-accent transition-colors text-left">
              Industries
            </button>
            <button onClick={() => scrollToSection('team')} className="text-foreground/80 hover:text-accent transition-colors text-left">
              About
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-foreground/80 hover:text-accent transition-colors text-left">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-foreground/80 hover:text-accent transition-colors text-left">
              Contact
            </button>
            <Button onClick={() => scrollToSection('contact')} className="bg-accent hover:bg-accent/90 text-accent-foreground w-full">
              Get Started
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;