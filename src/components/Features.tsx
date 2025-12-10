import { LayoutGrid } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    title: "Inquiry Management",
    description: "Track and manage all inquiries from multiple sources in one unified dashboard. Never miss a potential client again.",
  },
  {
    title: "Team Performance",
    description: "Monitor team member performance with detailed analytics on inquiries, assessments, and conversions.",
  },
  {
    title: "Conversion Tracking",
    description: "Track the complete journey from inquiry to conversion with real-time analytics and insights.",
  },
  {
    title: "Advanced Analytics",
    description: "Get comprehensive insights with customizable reports, charts, and data visualization tools.",
  },
  {
    title: "Real-Time Alerts",
    description: "Stay informed with instant notifications for new inquiries, updates, and important milestones.",
  },
  {
    title: "Assessment Management",
    description: "Create, track, and manage assessments with seamless integration into your workflow.",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-cyan-50 to-blue-50 relative overflow-hidden">
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
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Transform Your Workflow <br></br>With <span className="text-gradient">PulseBoard's Capabilities</span>
          </h2>
          <p className="text-xl text-foreground max-w-3xl mx-auto">
            Everything you need to manage healthcare inquiries and conversions effectively
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            return (
              <Card 
                key={index}
                className="p-8 bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group rounded-3xl relative"
                style={{ 
                  animation: `fade-in 0.6s ease-out forwards`,
                  animationDelay: `${index * 100}ms`,
                  opacity: 0,
                }}
              >
                {/* Grid icon in top-right corner */}
                <div className="absolute top-7 right-7">
                  <LayoutGrid className="w-8 h-8 text-cyan-400" strokeWidth={2} />
                </div>

                <div className="space-y-3 pr-12 pt-9">
                  <h3 className="text-2xl font-semibold text-blue-900">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-700 leading-relaxed text-sm pb-5">
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
