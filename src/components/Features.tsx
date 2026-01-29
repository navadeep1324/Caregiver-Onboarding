import heroElement from "@/assets/hero-element.png";
import scheduleTestImg from "@/assets/Schedule test.png";

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="container px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="h2-heading font-bold" style={{ color: '#003D82' }}>
           A Peek Into Our Caregiver Onboarding App 
          </h2>
          <p className="text-base md:text-lg text-gray-700 max-w-4xl mx-auto">
A brief walkthrough of slides and features that make hiring and onboarding seamless.           </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12 items-center max-w-7xl mx-auto">
          {/* Left Column - Text Content (40%) */}
          <div className="w-full lg:w-[40%] space-y-6 relative z-10">
            <h3 className="h2-heading font-bold text-foreground">
              Streamline Job Posts & Track Progress 
            </h3>
            
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
Set up a post, manage hiring stages, and track everything until onboarding.             </p>

            <ul className="space-y-3 pt-4">
              <li className="flex items-start gap-3">
                <span className="text-black text-xl font-bold">•</span>
                <span className="text-base md:text-lg text-black">Schedule and manage interviews from a single dashboard </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-black text-xl font-bold">•</span>
                <span className="text-base md:text-lg text-black">Ensure nothing slips through the cracks during hiring </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-black text-xl font-bold">•</span>
                <span className="text-base md:text-lg text-black">Define interview stages and workflows easily </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-black text-xl font-bold">•</span>
                <span className="text-base md:text-lg text-black">Assign tests and assessments at every stage </span>
              </li>
            </ul>

            <div className="pt-4">
              <button
                className="button-item px-8 py-3 text-base font-semibold"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn more
              </button>
            </div>
          </div>

          {/* Right Column - Calendar Interface with Decorative Background (60%) */}
          <div className="w-full lg:w-[60%] relative flex justify-center lg:justify-end">
            <div className="relative z-10 w-full max-w-2xl">
              <div className="relative z-10 overflow-hidden">
                <img
                  src={scheduleTestImg}
                  alt="Schedule Test Interface"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
