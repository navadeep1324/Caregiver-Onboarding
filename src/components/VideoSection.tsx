import { Play } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const VideoSection = () => {
  return (
    <section className="py-24 section-alt relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-primary-glow/5 rounded-full blur-3xl" />
      
      <div className="container px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            See <span className="text-gradient">PulseBoard</span> in Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Watch how leading healthcare organizations are transforming their operations
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Card className="relative overflow-hidden border-0 shadow-card rounded-2xl group">
            <div className="aspect-video bg-gradient-hero flex items-center justify-center relative">
              {/* Wave decorations */}
              <svg 
                className="absolute bottom-0 left-0 w-full h-auto opacity-10"
                viewBox="0 0 1440 320"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" 
                  fill="currentColor"
                  className="text-white"
                />
              </svg>
              
              {/* Play Button */}
              <Button
                size="lg"
                className="relative z-10 w-24 h-24 rounded-full bg-white hover:bg-white/95 shadow-2xl group-hover:scale-110 transition-all duration-300"
              >
                <Play className="w-10 h-10 text-primary fill-primary ml-1" />
              </Button>
              
              {/* Video Stats Overlay */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-4 z-10">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl px-5 py-3 shadow-lg">
                  <div className="text-2xl font-bold text-primary">3:45</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">Duration</div>
                </div>
                <div className="bg-white/95 backdrop-blur-sm rounded-xl px-5 py-3 shadow-lg">
                  <div className="text-2xl font-bold text-primary">10K+</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">Views</div>
                </div>
              </div>
            </div>
          </Card>
          
          {/* Features Below Video */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Card className="text-center p-8 bg-card border-0 shadow-card rounded-2xl">
              <div className="text-4xl font-bold text-primary mb-2">5 min</div>
              <p className="text-muted-foreground font-medium">Quick Setup</p>
            </Card>
            <Card className="text-center p-8 bg-card border-0 shadow-card rounded-2xl">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <p className="text-muted-foreground font-medium">Support Available</p>
            </Card>
            <Card className="text-center p-8 bg-card border-0 shadow-card rounded-2xl">
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <p className="text-muted-foreground font-medium">Happy Clients</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
