import { TrendingUp, Users, Clock, Target, Zap, BarChart } from "lucide-react";
import { Card } from "@/components/ui/card";

const stats = [
  {
    icon: TrendingUp,
    value: "85%",
    label: "Faster",
    description: "Response time with real-time inquiry tracking and alerts",
    delay: "0ms",
  },
  {
    icon: Users,
    value: "90%",
    label: "Better Team",
    prefix: "UPTO",
    description: "Performance improvement with data-driven insights",
    delay: "100ms",
  },
  {
    icon: Clock,
    value: "20+",
    label: "Saves Time",
    suffix: "hours",
    description: "Weekly saved through automated workflows and tracking",
    delay: "200ms",
  },
  {
    icon: Target,
    value: "100%",
    label: "Visibility",
    description: "Complete transparency across all inquiries and conversions",
    delay: "300ms",
  },
  {
    icon: Zap,
    value: "75%",
    label: "Lead Conversion",
    description: "Higher conversion rates through intelligent follow-ups",
    delay: "400ms",
  },
  {
    icon: BarChart,
    value: "95%",
    label: "Workflow Efficiency",
    prefix: "UPTO",
    description: "Efficiency boost through seamless integration",
    delay: "500ms",
  },
];

const Stats = () => {
  return (
    <section className="py-24 bg-background relative">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            How PulseBoard Redefines Healthcare Management
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the measurable edge that intelligent automation brings
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card 
                key={index}
                className="p-8 bg-gradient-card border-2 border-accent hover:border-primary transition-all duration-300 hover:shadow-card group"
                style={{ 
                  animation: `fade-in 0.6s ease-out forwards`,
                  animationDelay: stat.delay,
                  opacity: 0,
                }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 bg-accent rounded-2xl group-hover:bg-primary/10 transition-colors">
                    <Icon className="w-8 h-8 text-accent-foreground group-hover:text-primary transition-colors" />
                  </div>
                  
                  {stat.prefix && (
                    <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                      {stat.prefix}
                    </span>
                  )}
                  
                  <div className="space-y-1">
                    <div className="text-5xl font-bold text-primary group-hover:scale-110 transition-transform">
                      {stat.value}
                    </div>
                    {stat.suffix && (
                      <div className="text-lg font-medium text-muted-foreground">
                        {stat.suffix}
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground">
                    {stat.label}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {stat.description}
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

export default Stats;
