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
    <section className="py-12 md:py-24 stats-gradient-section relative overflow-hidden">
      <div className="container px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 items-stretch">

          {/* First Column - 40% width (4 out of 10 columns) */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground text-heading">
              See How PulseBoard Accelerates Growth
            </h2>
            <p className="text-xl text-muted-foreground text-desc">
              Experience the Advantage That Transforms Business Performance
            </p>
          </div>

          {/* Second Column - 20% width (2 out of 10 columns) */}
          <div className="lg:col-span-2 bg-white rounded-xl py-6 md:py-10 px-8 flex flex-col space-y-3">
            <div className="stat-value">40%</div>
            <div className="stat-subtitle">Fewer</div>
            <h3 className="stat-title">Missed Leads</h3>
            <p className="stat-description">
              Unified call tracking eliminates prospect loss from disorganized workflows.
            </p>
          </div>

          {/* Third Column - 20% width (2 out of 10 columns) */}
          <div className="lg:col-span-2 bg-white rounded-2xl py-6 md:py-10 px-8 flex flex-col space-y-3">
            <div className="stat-value">35-45%</div>
            <div className="stat-subtitle">Increase</div>
            <h3 className="stat-title">Team Performance</h3>
            <p className="stat-description">
              Real-time visibility boosts accountability and improves performance.
            </p>
          </div>

          {/* Fourth Column - 20% width (2 out of 10 columns) */}
          <div className="lg:col-span-2 bg-white rounded-2xl py-6 md:py-10 px-8 flex flex-col space-y-3">
            <div className="stat-value">50%</div>
            <div className="stat-subtitle">Faster</div>
            <h3 className="stat-title">Decision-Making</h3>
            <p className="stat-description">
              Clear insight into calls and workload enhances efficiency and planning.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Stats;
