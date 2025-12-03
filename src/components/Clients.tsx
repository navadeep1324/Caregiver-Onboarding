import { CheckCircle2 } from "lucide-react";

const clientFeatures = [
  {
    title: "AI-Powered Call Analytics",
    description: "Our advanced AI analyzes every conversation to extract actionable insights, identify patterns, and highlight opportunities for improvement.",
    benefits: [
      "Real-time sentiment analysis",
      "Automatic call transcription",
      "Key moment detection"
    ],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
    imageAlt: "Team collaboration on analytics dashboard"
  },
  {
    title: "Smart Lead Management",
    description: "Convert more leads with intelligent tracking and automated follow-ups. Never miss an opportunity with our comprehensive lead scoring system.",
    benefits: [
      "Automated lead scoring",
      "Smart follow-up reminders",
      "Conversion tracking"
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    imageAlt: "Lead management dashboard"
  },
  {
    title: "Team Performance Insights",
    description: "Empower your team with detailed performance metrics and coaching insights. Identify top performers and areas for growth.",
    benefits: [
      "Individual performance tracking",
      "Team benchmarking",
      "Custom coaching reports"
    ],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    imageAlt: "Team performance analytics"
  }
];

const Clients = () => {
  return (
    <section className="py-20">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Healthcare Leaders Choose <span className="text-gradient">PulseBoard</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how our platform transforms healthcare communication and drives better outcomes
          </p>
        </div>

        <div className="space-y-0">
          {clientFeatures.map((feature, index) => (
            <div 
              key={index} 
              className={`py-16 ${index % 2 === 1 ? 'section-alt' : ''}`}
            >
              <div className={`container px-4 flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                {/* Text Content */}
                <div className="flex-1 space-y-6">
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image */}
                <div className="flex-1">
                  <div className="relative rounded-2xl overflow-hidden shadow-card">
                    <img 
                      src={feature.image} 
                      alt={feature.imageAlt}
                      className="w-full h-[300px] md:h-[400px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
