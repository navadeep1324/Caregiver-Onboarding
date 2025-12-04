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
    <section className="py-24 section-alt relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-glow/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            How PulseBoard Redefines <span className="text-gradient">Healthcare Management</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the measurable edge that intelligent automation brings
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card 
                key={index}
                className="p-8 bg-card border-0 shadow-card hover:shadow-lg transition-all duration-300 group rounded-2xl"
                style={{ 
                  animation: `fade-in 0.6s ease-out forwards`,
                  animationDelay: stat.delay,
                  opacity: 0,
                }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 bg-section-alt rounded-2xl group-hover:bg-primary/10 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  {stat.prefix && (
                    <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                      {stat.prefix}
                    </span>
                  )}
                  
                  <div className="space-y-1">
                    <div className="text-4xl font-bold text-primary group-hover:scale-105 transition-transform">
                      {stat.value}
                    </div>
                    {stat.suffix && (
                      <div className="text-lg font-medium text-muted-foreground uppercase">
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
