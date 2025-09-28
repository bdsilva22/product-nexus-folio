import { Card } from "@/components/ui/card";
import { BookOpen, Headphones, Calendar, ExternalLink } from "lucide-react";

const InsightsSection = () => {
  const books = [
    {
      title: "Inspired: How to Create Tech Products Customers Love",
      author: "Marty Cagan",
      reason: "Essential guide for product strategy and customer-centric development"
    },
    {
      title: "The Lean Startup",
      author: "Eric Ries", 
      reason: "Foundation for building products that customers actually want"
    },
    {
      title: "Crossing the Chasm",
      author: "Geoffrey Moore",
      reason: "Critical for understanding how to scale products in enterprise markets"
    },
    {
      title: "The Hard Thing About Hard Things",
      author: "Ben Horowitz",
      reason: "Real-world insights on building and scaling technology companies"
    }
  ];

  const podcasts = [
    {
      title: "This Week in Startups",
      host: "Jason Calacanis",
      reason: "Weekly insights on startup trends and product innovation"
    },
    {
      title: "Masters of Scale", 
      host: "Reid Hoffman",
      reason: "Deep dives into how successful companies scaled their products"
    },
    {
      title: "a16z Podcast",
      host: "Andreessen Horowitz",
      reason: "Forward-thinking perspectives on technology and financial services"
    },
    {
      title: "Product Hunt Radio",
      host: "Product Hunt",
      reason: "Latest trends in product development and startup culture"
    }
  ];

  const events = [
    {
      name: "ProductCon",
      type: "Conference",
      focus: "Product management best practices and strategy"
    },
    {
      name: "FinTech Meetup NYC",
      type: "Meetup",
      focus: "Financial technology innovation and networking"
    },
    {
      name: "Mind the Product",
      type: "Conference", 
      focus: "Product leadership and community building"
    },
    {
      name: "Money 20/20",
      type: "Conference",
      focus: "Payments, fintech, and financial services innovation"
    }
  ];

  return (
    <section id="insights" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Staying Current & Continuously Learning
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Product management is an evolving field. Here's how I stay sharp and informed about industry trends, best practices, and emerging opportunities.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Books */}
          <Card className="gradient-card p-8 shadow-card hover:shadow-hero transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-accent/10 text-accent p-3 rounded-xl mr-4">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Essential Reading</h3>
            </div>
            
            <div className="space-y-4">
              {books.map((book, index) => (
                <div key={index} className="border-l-2 border-accent/20 pl-4">
                  <h4 className="font-semibold text-foreground text-sm">{book.title}</h4>
                  <p className="text-accent text-xs font-medium">by {book.author}</p>
                  <p className="text-muted-foreground text-xs mt-1">{book.reason}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Podcasts */}
          <Card className="gradient-card p-8 shadow-card hover:shadow-hero transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-accent/10 text-accent p-3 rounded-xl mr-4">
                <Headphones className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Weekly Listening</h3>
            </div>
            
            <div className="space-y-4">
              {podcasts.map((podcast, index) => (
                <div key={index} className="border-l-2 border-accent/20 pl-4">
                  <h4 className="font-semibold text-foreground text-sm">{podcast.title}</h4>
                  <p className="text-accent text-xs font-medium">with {podcast.host}</p>
                  <p className="text-muted-foreground text-xs mt-1">{podcast.reason}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Events */}
          <Card className="gradient-card p-8 shadow-card hover:shadow-hero transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-accent/10 text-accent p-3 rounded-xl mr-4">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Industry Engagement</h3>
            </div>
            
            <div className="space-y-4">
              {events.map((event, index) => (
                <div key={index} className="border-l-2 border-accent/20 pl-4">
                  <h4 className="font-semibold text-foreground text-sm">{event.name}</h4>
                  <p className="text-accent text-xs font-medium">{event.type}</p>
                  <p className="text-muted-foreground text-xs mt-1">{event.focus}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-accent/5 rounded-2xl p-6 max-w-2xl">
            <div className="text-center">
              <p className="text-foreground font-semibold mb-2">
                "The best product managers are perpetual learners who combine deep industry knowledge with fresh perspectives."
              </p>
              <p className="text-muted-foreground text-sm">
                This mindset has been crucial to my success at E*TRADE and Morgan Stanley, and I bring this same curiosity to every client engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;