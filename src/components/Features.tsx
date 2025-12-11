import { Card } from "@/components/ui/card";
import callTracking from "@/assets/Call Tracking.png";
import sourceId from "@/assets/Source Identification.png";
import teamActivity from "@/assets/Team Activity Monitoring.png";
import journeyMapping from "@/assets/Journey Mapping.png";
import insightsAlerts from "@/assets/Insights & Alerts.png";
import leadSource from "@/assets/Lead Source Analysis.png";

const features = [
  {
    title: "Complete Call Tracking",
    description: "Record every incoming call along with source, time, purpose, and caller details.",
    icon: callTracking,
  },
  {
    title: "Source Identification",
    description: "Track whether prospects came from website, ads, referrals, walk-ins, or other channels.",
    icon: sourceId,
  },
  {
    title: "Team Activity Monitoring",
    description: "See which team member handled each call and what actions were taken at every stage.",
    icon: teamActivity,
  },
  {
    title: "Full Prospect Journey Mapping",
    description: "Follow a client's path from the first call to assessment, lead creation, and beyond.",
    icon: journeyMapping,
  },
  {
    title: "Real-Time Insights & Alerts",
    description: "Instant visibility into new calls, pending follow-ups, and team workloads.",
    icon: insightsAlerts,
  },
  {
    title: "Lead Source Analysis",
    description: "Identify which channels bring the highest-value prospects and generate better ROI.",
    icon: leadSource,
  },
];

const Features = () => {
  return (
    <section id="features" className="py-12 md:py-24 bg-gradient-to-br from-cyan-50 to-blue-50 relative overflow-hidden">
      {/* Decorative wave element */}
      {/* <div className="absolute bottom-0 left-0 w-64 h-64 opacity-20">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path 
            fill="#10B2E6" 
            d="M45.7,-77.6C58.9,-69.3,69.4,-56.8,76.8,-42.4C84.2,-28,88.5,-11.7,88.3,4.7C88.1,21.1,83.4,37.6,74.8,51.2C66.2,64.8,53.7,75.5,39.4,81.3C25.1,87.1,9,88,3.4,82.1C-2.2,76.2,-4.4,63.5,-14.3,55.8C-24.2,48.1,-41.8,45.4,-54.8,37.4C-67.8,29.4,-76.2,16.1,-79.1,1.4C-82,-13.3,-79.4,-29.4,-71.3,-42.2C-63.2,-55,-49.6,-64.5,-35.4,-72.4C-21.2,-80.3,-6.4,-86.6,7.2,-97.3C20.8,-108,32.5,-85.9,45.7,-77.6Z" 
            transform="translate(100 100)" 
          />
        </svg>
      </div> */}

      <div className="container px-4 relative z-10">
        <div className="text-center mb-10 md:mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Everything Your Business Needs, <span className="text-gradient">In One Place</span>
          </h2>
          <p className="text-xl text-foreground max-w-5xl mx-auto">
            Specializations that empower teams, streamline processes, and drive smarter decisions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            return (
              <Card
                key={index}
                className="py-8 md:py-10 px-6 md:px-8 bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group rounded-2xl relative h-full flex flex-col min-h-[320px]"
                style={{
                  animation: `fade-in 0.6s ease-out forwards`,
                  animationDelay: `${index * 100}ms`,
                  opacity: 0,
                }}
              >
                {/* Icon in top-right corner */}
                <div className="absolute top-5 right-5">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-12 h-12 object-contain"
                  />
                </div>

                <div className="space-y-3 pt-6">
                  <h3 className="text-2xl font-semibold text-blue-900 pr-16">
                    {feature.title}
                  </h3>

                  <p className="text-gray-700 leading-relaxed text-base pb-3">
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
