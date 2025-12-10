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
    <section className="py-24 stats-gradient-section relative overflow-hidden">
      <div className="container px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 items-stretch">
          
          {/* First Column - 40% width (4 out of 10 columns) */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-heading">
              How PulseBoard Redefines Healthcare Management
            </h2>
            <p className="text-xl text-muted-foreground text-desc">
              Experience the measurable edge that <br></br>intelligent automation brings
            </p>
          </div>

          {/* Second Column - 20% width (2 out of 10 columns) */}
          <div className="lg:col-span-2 bg-white rounded-xl py-10 px-8 shadow-lg flex flex-col space-y-3">
            <div className="stat-value">20+</div>
            <div className="stat-subtitle">Hours</div>
            <h3 className="stat-title">Saves Time</h3>
            <p className="stat-description">
              Weekly saved through automated workflows and tracking workflows and tracking workflows
            </p>
          </div>

          {/* Third Column - 20% width (2 out of 10 columns) */}
          <div className="lg:col-span-2 bg-white rounded-2xl py-10 px-8 shadow-lg flex flex-col space-y-3">
            <div className="stat-value">75%</div>
            <div className="stat-subtitle">Faster</div>
            <h3 className="stat-title">Lead Conversion</h3>
            <p className="stat-description">
              Higher conversion rates through intelligent follow-ups ntelligent follow-ups ntelligent follow-ups ntelligent
            </p>
          </div>

          {/* Fourth Column - 20% width (2 out of 10 columns) */}
          <div className="lg:col-span-2 bg-white rounded-2xl py-10 px-8 shadow-lg flex flex-col space-y-3">
            <div className="stat-value">90%</div>
            <div className="stat-subtitle">Faster</div>
            <h3 className="stat-title">Better Team</h3>
            <p className="stat-description">
              Performance improvement with data-driven insights Performance improvement with data-driven insights
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Stats;
