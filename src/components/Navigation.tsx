import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 gradient-hero border-b border-white/20 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-primary-foreground">
            Bruno D. Silva
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('insights')}
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              Insights
            </button>
            <Button 
              variant="accent" 
              size="lg"
              onClick={() => window.open('https://calendly.com/your-username', '_blank')}
              className="ml-4"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Schedule Call
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;