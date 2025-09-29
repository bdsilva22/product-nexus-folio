import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, ArrowRight, Zap, Target, Rocket } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      tier: "Essential PM",
      icon: <Target className="w-8 h-8" />,
      price: "$8,000",
      period: "/month",
      description: "Core product management to get your product development on track",
      features: [
        "Product roadmap development",
        "Feature prioritization & backlog management", 
        "Stakeholder alignment sessions",
        "Basic user research & analysis",
        "Weekly progress reports",
        "20 hours per month"
      ],
      popular: false,
      buttonText: "Get Started"
    },
    {
      tier: "Strategic PM",
      icon: <Zap className="w-8 h-8" />,
      price: "$15,000",
      period: "/month", 
      description: "Full-service product leadership to scale your financial products",
      features: [
        "Everything in Essential PM",
        "Go-to-market strategy development",
        "Competitive analysis & positioning",
        "Revenue optimization strategies",
        "Cross-functional team leadership",
        "Customer interview facilitation",
        "KPI tracking & performance analysis",
        "40 hours per month"
      ],
      popular: true,
      buttonText: "Most Popular"
    },
    {
      tier: "Transformation PM",
      icon: <Rocket className="w-8 h-8" />,
      price: "$25,000",
      period: "/month",
      description: "End-to-end product transformation for rapid scaling and market leadership",
      features: [
        "Everything in Strategic PM",
        "Platform architecture strategy",
        "Regulatory compliance guidance",
        "Team hiring & capability building",
        "Board-level strategic presentations",
        "Partner ecosystem development",
        "Crisis management & rapid response",
        "60+ hours per month"
      ],
      popular: false,
      buttonText: "Transform Now"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Fractional Product Management Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the level of product leadership that matches your current needs and growth stage. All services include my deep fintech expertise.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className={`relative p-8 ${service.popular ? 'ring-2 ring-accent shadow-accent' : 'shadow-card hover:shadow-hero'} transition-all duration-300 group`}>
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="gradient-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <div className={`inline-flex p-3 rounded-2xl mb-4 ${service.popular ? 'gradient-accent text-accent-foreground' : 'bg-accent/10 text-accent'}`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{service.tier}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-foreground">{service.price}</span>
                  <span className="text-muted-foreground ml-1">{service.period}</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={service.popular ? "accent" : "professional"}
                size="lg"
                className="w-full group-hover:shadow-accent transition-all duration-300"
                onClick={() => window.open('https://calendly.com/your-username', '_blank')}
              >
                {service.buttonText}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            All services include direct access via Slack/email and can be customized to your specific needs.
          </p>
          <Button 
            variant="ghost" 
            size="lg"
            onClick={() => window.open('https://calendly.com/your-username', '_blank')}
          >
            Not sure which is right for you? Let's talk
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;