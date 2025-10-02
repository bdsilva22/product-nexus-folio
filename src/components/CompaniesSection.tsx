import etradeLogo from "@/assets/logos/ET-logo.png";
import morganLogo from "@/assets/logos/MS-Logo.png";

const CompaniesSection = () => {
  const companies = [
    {
      name: "E*TRADE",
      description: "Senior Product Manager - Banking & Deposit Systems",
      logo: etradeLogo
    },
    {
      name: "Morgan Stanley",
      description: "Senior Product Manager - Personal Finance & Content Tools", 
      logo: morganLogo
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Proven Track Record at Leading Financial Institutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built and scaled products for top-tier financial brands, managing platforms that serve millions of users and drive significant business impact.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {companies.map((company, index) => (
            <div key={index} className="gradient-card rounded-2xl p-8 shadow-card hover:shadow-hero transition-all duration-300">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-background rounded-xl flex items-center justify-center shadow-sm">
                  <img 
                    src={company.logo} 
                    alt={`${company.name} logo`}
                    className="w-12 h-8 object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{company.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">{company.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-12 bg-background rounded-2xl p-8 shadow-card">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">$22M+</div>
              <div className="text-sm text-muted-foreground">New Assets Driven</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">7M+</div>
              <div className="text-sm text-muted-foreground">Users Served</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">$1.7M</div>
              <div className="text-sm text-muted-foreground">Cost Savings</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;