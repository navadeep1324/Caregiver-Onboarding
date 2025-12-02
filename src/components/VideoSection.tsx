import { Play } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const VideoSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            See PulseBoard in Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Watch how leading healthcare organizations are transforming their operations
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Card className="relative overflow-hidden border-2 border-primary/20 shadow-card group">
            <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center relative">
              {/* Video Thumbnail Overlay */}
              <div className="absolute inset-0 bg-gradient-hero opacity-80" />
              
              {/* Play Button */}
              <Button
                size="lg"
                className="relative z-10 w-20 h-20 rounded-full bg-white hover:bg-white/90 shadow-glow animate-glow group-hover:scale-110 transition-transform"
              >
                <Play className="w-8 h-8 text-primary fill-primary ml-1" />
              </Button>
              
              {/* Video Stats Overlay */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-4 z-10">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
                  <div className="text-2xl font-bold text-primary">3:45</div>
                  <div className="text-xs text-muted-foreground">Duration</div>
                </div>
                <div className="bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
                  <div className="text-2xl font-bold text-primary">10K+</div>
                  <div className="text-xs text-muted-foreground">Views</div>
                </div>
              </div>
            </div>
          </Card>
          
          {/* Features Below Video */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">5 min</div>
              <p className="text-muted-foreground">Quick Setup</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <p className="text-muted-foreground">Support Available</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">100+</div>
              <p className="text-muted-foreground">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
