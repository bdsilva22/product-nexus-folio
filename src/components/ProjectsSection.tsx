import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, TrendingUp, Users, DollarSign, Shield } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "ACH Deposit Switching System",
      company: "E*TRADE",
      description: "Led the end-to-end development of a net-new deposit switching platform to capture $1.3B+ in annual inflows. Managed vendor evaluation, RFP process, contract negotiation, and 2025 pilot roadmap.",
      impact: "$1.3B+ projected annual inflows",
      users: "7M+ potential users",
      icon: <DollarSign className="w-6 h-6" />,
      tags: ["Zero-to-One", "Fintech", "Payments", "Strategy"]
    },
    {
      title: "Unified Pay & Transfer Hub",
      company: "E*TRADE", 
      description: "Redesigned E*TRADE's fragmented money movement experience into a consolidated platform, driving significant new asset acquisition through improved UX and strategic marketing integration.",
      impact: "$22M+ in new assets",
      users: "7M+ active users",
      icon: <TrendingUp className="w-6 h-6" />,
      tags: ["Platform Consolidation", "UX Strategy", "Growth"]
    },
    {
      title: "Personal Finance Mobile App",
      company: "Morgan Stanley",
      description: "Built and launched Morgan Stanley's first native personal finance application with spend tracking and charge detection. Led go-to-market strategy and iterative rollout based on user research.",
      impact: "90K+ client activations",
      users: "20K+ advisor adoptions", 
      icon: <Users className="w-6 h-6" />,
      tags: ["Mobile", "Consumer Finance", "GTM Strategy"]
    },
    {
      title: "Regulatory Compliance Modernization",
      company: "Morgan Stanley",
      description: "Deployed Sprinklr and Hearsay platforms to modernize advisor content sharing and social media compliance, reducing costs while enabling millions of client leads.",
      impact: "$1.7M cost reduction",
      users: "3.2M+ client leads generated",
      icon: <Shield className="w-6 h-6" />,
      tags: ["Compliance", "Platform Migration", "Cost Optimization"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Key Projects & Achievements
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A selection of high-impact product initiatives that demonstrate my ability to drive measurable business results in complex financial environments.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="gradient-card p-8 shadow-card hover:shadow-hero transition-all duration-300 group">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-accent/10 text-accent p-3 rounded-xl group-hover:gradient-accent group-hover:text-accent-foreground transition-all duration-300">
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                    <p className="text-accent font-semibold">{project.company}</p>
                  </div>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-background/50 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-success">{project.impact}</div>
                  <div className="text-xs text-muted-foreground">Business Impact</div>
                </div>
                <div className="bg-background/50 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-accent">{project.users}</div>
                  <div className="text-xs text-muted-foreground">Scale Reached</div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="accent" 
            size="lg"
            onClick={() => window.open('https://calendly.com/your-username', '_blank')}
          >
            Discuss Your Project Needs
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;