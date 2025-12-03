import { MessageSquare, Users, TrendingUp, BarChart3, Bell, FileText } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: MessageSquare,
    title: "Inquiry Management",
    description: "Track and manage all inquiries from multiple sources in one unified dashboard. Never miss a potential client again.",
  },
  {
    icon: Users,
    title: "Team Performance",
    description: "Monitor team member performance with detailed analytics on inquiries, assessments, and conversions.",
  },
  {
    icon: TrendingUp,
    title: "Conversion Tracking",
    description: "Track the complete journey from inquiry to conversion with real-time analytics and insights.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Get comprehensive insights with customizable reports, charts, and data visualization tools.",
  },
  {
    icon: Bell,
    title: "Real-Time Alerts",
    description: "Stay informed with instant notifications for new inquiries, updates, and important milestones.",
  },
  {
    icon: FileText,
    title: "Assessment Management",
    description: "Create, track, and manage assessments with seamless integration into your workflow.",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Transform Your Workflow With <span className="text-gradient">PulseBoard's Capabilities</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to manage healthcare inquiries and conversions effectively
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="p-8 bg-card border-0 shadow-card hover:shadow-lg transition-all duration-300 group rounded-2xl"
                style={{ 
                  animation: `fade-in 0.6s ease-out forwards`,
                  animationDelay: `${index * 100}ms`,
                  opacity: 0,
                }}
              >
                <div className="space-y-4">
                  <div className="p-4 bg-section-alt rounded-xl w-fit group-hover:bg-primary/10 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
