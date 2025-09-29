import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Mail, MessageCircle, ArrowRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-foreground mb-4">
            Ready to Scale Your Financial Product?
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Let's discuss how fractional product management can accelerate your growth and drive measurable business impact.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          <Card className="bg-background/10 backdrop-blur-sm border-white/20 p-6 text-center hover:bg-background/20 transition-all duration-300">
            <div className="bg-accent/20 text-accent-foreground p-3 rounded-xl inline-flex mb-4">
              <Calendar className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-primary-foreground mb-2">Discovery Call</h3>
            <p className="text-primary-foreground/60 text-sm mb-4">
              30-minute consultation to understand your product challenges and goals
            </p>
            <Button 
              variant="accent" 
              size="sm"
              onClick={() => window.open('https://calendly.com/your-username', '_blank')}
            >
              Book Now
            </Button>
          </Card>
          
          <Card className="bg-background/10 backdrop-blur-sm border-white/20 p-6 text-center hover:bg-background/20 transition-all duration-300">
            <div className="bg-accent/20 text-accent-foreground p-3 rounded-xl inline-flex mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-primary-foreground mb-2">Email</h3>
            <p className="text-primary-foreground/60 text-sm mb-4">
              Send me details about your project and I'll respond within 24 hours
            </p>
            <Button 
              variant="professional" 
              size="sm"
              onClick={() => window.location.href = 'mailto:your.email@domain.com'}
            >
              Send Email
            </Button>
          </Card>
          
          <Card className="bg-background/10 backdrop-blur-sm border-white/20 p-6 text-center hover:bg-background/20 transition-all duration-300">
            <div className="bg-accent/20 text-accent-foreground p-3 rounded-xl inline-flex mb-4">
              <MessageCircle className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-primary-foreground mb-2">LinkedIn</h3>
            <p className="text-primary-foreground/60 text-sm mb-4">
              Connect with me on LinkedIn for industry insights and updates
            </p>
            <Button 
              variant="professional" 
              size="sm"
              onClick={() => window.open('https://linkedin.com/in/your-profile', '_blank')}
            >
              Connect
            </Button>
          </Card>
        </div>
        
        <div className="text-center">
          <Button 
            variant="accent" 
            size="xl"
            onClick={() => window.open('https://calendly.com/your-username', '_blank')}
            className="group"
          >
            Schedule Your Free Consultation
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <p className="text-primary-foreground/60 text-sm mt-4">
            No commitment required • Quick response guaranteed
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;