import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Wave decoration */}
      <div className="absolute inset-0 overflow-hidden">
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
        <svg 
          className="absolute -left-20 top-1/4 w-[600px] h-[600px] opacity-10"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            fill="currentColor" 
            className="text-white"
            d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,89.1,-0.5C88.2,15.3,83.8,30.5,75.6,43.6C67.4,56.7,55.4,67.7,41.5,74.8C27.6,82,11.8,85.3,-3.5,84.1C-18.8,82.9,-37.6,77.2,-52.9,67.5C-68.2,57.8,-80,44.1,-85.1,28.4C-90.2,12.7,-88.6,-5,-83.1,-21.2C-77.6,-37.4,-68.2,-52.1,-55.4,-60.3C-42.6,-68.5,-26.5,-70.2,-11.2,-69.8C4.1,-69.4,30.6,-83.6,44.7,-76.4Z" 
            transform="translate(100 100)" 
          />
        </svg>
      </div>
      
      {/* Content */}
      <div className="container relative z-10 px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight tracking-tight">
            Transform Healthcare Communication with{" "}
            <span className="text-white drop-shadow-lg">PulseBoard</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Streamline inquiries, track conversions, and empower your team with real-time insights — 
            all in one intelligent platform
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/95 text-lg px-10 py-7 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Book Demo
            </Button>
            <Button 
              size="lg" 
              className="border-2 border-white bg-transparent text-white hover:bg-white/10 text-lg px-10 py-7 rounded-full font-semibold backdrop-blur-sm"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      {/* Bottom curve */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          viewBox="0 0 1440 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path 
            d="M0,50 C360,100 720,0 1440,50 L1440,100 L0,100 Z" 
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
