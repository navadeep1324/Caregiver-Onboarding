import { Button } from "@/components/ui/button";
import group64 from "@/assets/test.png";
import group65 from "@/assets/Onboarding Status.png";

const Solutions = () => {
  return (
    <>
      {/* Second Section - Identify What's Driving Growth */}
      <section className="py-12 md:py-24 px-4 lg:px-8 bg-[#F2F2F7]">
        <div className="container mx-auto max-w-8xl">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Left Column - Image (60%) */}
            <div className="w-full lg:w-[60%] flex justify-center lg:justify-start order-2 lg:order-1">
              <img 
                src={group65} 
                alt="Growth Analytics" 
                className="w-full max-w-2xl object-contain"
              />
            </div>

            {/* Right Column - Content (40%) */}
            <div className="w-full lg:w-[40%] space-y-6 order-1 lg:order-2"> 
              <h3 className="h2-heading font-bold text-foreground">
               Understand Your Hire Before They Join 
              </h3>
              
              <p className="text-lg text-foreground leading-relaxed">
             Access all candidate information and validate skills to ensure the right fit. 
              </p>

              <ul className="space-y-4 pt-4">
                <li className="flex items-start gap-3">
                  <span className="text-foreground text-xl mt-1">•</span>
                  <span className="text-lg text-foreground">Review applicant profiles with detailed information </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-foreground text-xl mt-1">•</span>
                  <span className="text-lg text-foreground">Assess skills and certifications before onboarding </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-foreground text-xl mt-1">•</span>
                  <span className="text-lg text-foreground">Make data-driven decisions with candidate insights  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-foreground text-xl mt-1">•</span>
                  <span className="text-lg text-foreground">Reduce risk by ensuring the candidate aligns with your requirements </span>
                </li>
              </ul>

              <div className="pt-4">
                <Button 
                  className="button-item"
                  size="lg"
                >
                  Learn more
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* First Section - Unified Assessment Dashboard */}
      <section className="py-12 md:py-24 px-4 lg:px-8">
        <div className="container mx-auto max-w-8xl">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Left Column - Content (40%) */}
            <div className="w-full lg:w-[40%] space-y-6">
              <h3 className="h2-heading font-bold text-foreground">
              Test, Evaluate & Welcome the Right Talent 
              </h3>
              
              <p className="text-lg text-foreground leading-relaxed">
Create assessments, get instant results, and onboard with confidence.               </p>

              <ul className="space-y-4 pt-4">
                <li className="flex items-start gap-3">
                  <span className="text-foreground text-xl mt-1">•</span>
                  <span className="text-lg text-foreground">Build role-specific tests and evaluations easily </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-foreground text-xl mt-1">•</span>
                  <span className="text-lg text-foreground">Receive instant scoring and performance records </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-foreground text-xl mt-1">•</span>
                  <span className="text-lg text-foreground">Identify top performers without manual tracking </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-foreground text-xl mt-1">•</span>
                  <span className="text-lg text-foreground">Onboard selected candidates quickly and securely </span>
                </li>
              </ul>

              <div className="pt-4">
                <Button 
                  className="button-item"
                  size="lg"
                >
                  Learn more
                </Button>
              </div>
            </div>

            {/* Right Column - Image (60%) */}
            <div className="w-full lg:w-[60%] flex justify-center lg:justify-end">
              <img 
                src={group64} 
                alt="Unified Assessment Dashboard" 
                className="w-full max-w-2xl object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Solutions;
