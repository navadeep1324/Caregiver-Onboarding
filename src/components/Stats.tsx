import { TrendingUp, Users, Clock, Target, Zap, BarChart } from "lucide-react";
import { Card } from "@/components/ui/card";

const Stats = () => {
  return (
    <section className="py-12 md:py-24 stats-gradient-section relative overflow-hidden">
      <div className="container relative z-10 stat-section">
        {/* Header Section */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="h2-heading font-bold text-foreground text-white">
           Measurable Results That Matter
          </h2>
          <p className="text-lg md:text-xl text-foreground max-w-4xl mx-auto">
Smarter workflows that drive faster hires and measurable results.          </p>
        </div>

        {/* Benefits Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 - Open APIs & integrations */}
          <div className="bg-white rounded-2xl p-6 md:p-8 flex flex-col items-center text-center space-y-4">
            <h3 className="h3-heading font-semibold text-primary">
             50% Faster Hiring 
            </h3>
            <p className="text-base text-gray-700 leading-relaxed">
Move from job post to onboarding without delays.             </p>
          </div>

          {/* Card 2 - 24/7 software uptime */}
          <div className="bg-white rounded-2xl p-6 md:p-8 flex flex-col items-center text-center space-y-4">
            <h3 className="h3-heading font-semibold text-primary">
             10+ Hours Saved Per Hire 
            </h3>
            <p className="text-base text-gray-700 leading-relaxed">
Let automation handle the admin work.             </p>
          </div>

          {/* Card 3 - 360° data security */}
          <div className="bg-white rounded-2xl p-6 md:p-8 flex flex-col items-center text-center space-y-4">
            <h3 className="h3-heading font-semibold text-primary">
             100% Process Visibility 

            </h3>
            <p className="text-base text-gray-700 leading-relaxed">
Track every step, every document, every decision. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
