import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import heroPortrait from "@/assets/Portrait.jpeg";

const HeroSection = () => {
  return (
    <section className="min-h-screen gradient-hero flex items-center justify-center relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] repeat"></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
                Scaling Financial Products
                <span className="block text-accent-foreground">Through Strategic PM</span>
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed max-w-2xl">
                9+ years building platforms for E*TRADE and Morgan Stanley. I help fintech companies launch products that drive $100M+ revenue impact through fractional product management expertise.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="accent" 
                size="xl"
                onClick={() => window.open('https://calendly.com/your-username', '_blank')}
                className="group"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Discovery Call
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="professional" 
                size="xl"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Services
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-foreground">$1.3B+</div>
                <div className="text-sm text-primary-foreground/60">Revenue Impact</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-foreground">9+</div>
                <div className="text-sm text-primary-foreground/60">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-foreground">90K+</div>
                <div className="text-sm text-primary-foreground/60">User Activations</div>
              </div>
            </div>
          </div>
          
          {/* Portrait */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-hero">
                <img 
                  src={heroPortrait} 
                  alt="Professional headshot" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 gradient-accent rounded-2xl flex items-center justify-center shadow-accent">
                <span className="text-2xl font-bold text-accent-foreground">PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;