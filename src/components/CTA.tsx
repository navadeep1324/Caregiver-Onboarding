import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Wave decorations */}
      <svg 
        className="absolute top-0 left-0 w-full h-auto opacity-10 rotate-180"
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
      
      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Ready to Transform Your <span className="text-gradient">Healthcare Management?</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
            Join leading healthcare organizations using PulseBoard to streamline operations and boost conversions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/95 text-lg px-10 py-7 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white/80 text-white hover:bg-white/10 text-lg px-10 py-7 rounded-full font-semibold backdrop-blur-sm button-item"
            >
              Schedule Demo
            </Button>
          </div>
          
          {/* <p className="text-white/70 text-sm">
            No credit card required • 14-day free trial • Cancel anytime
          </p> */}
        </div>
      </div>
      
      {/* Bottom wave */}
      <svg 
        className="absolute bottom-0 left-0 w-full h-auto opacity-10"
        viewBox="0 0 1440 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,149.3C672,149,768,171,864,176C960,181,1056,171,1152,149.3C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" 
          fill="currentColor"
          className="text-white"
        />
      </svg>
    </section>
  );
};

export default CTA;
