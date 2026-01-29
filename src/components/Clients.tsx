import doc1 from "@/assets/doc.jpg";
import doc2 from "@/assets/doc 2.jpg";
import doc3 from "@/assets/doc 3.jpg";
import heroElement from "@/assets/hero-element.png";

const Clients = () => {
  return (
    <section id="solutions" className=" px-4 lg:px-8 relative overflow-hidden bg-[#E5E5EA] adv-sec" >
      {/* Decorative hero element background - right side */}
      <div className="absolute right-[150px] -translate-y-1/2 translate-x-1/4 z-0 pointer-events-none hidden lg:block" style={{top:"65%"}}>
        <img 
          src={heroElement} 
          alt="" 
          className="w-[900px] h-[900px] object-contain"
          style={{ transform: 'rotate(200deg) scaleY(-1)' }}
        />
      </div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="h2-heading font-bold text-primary">
            Core Features That Power Your Hiring
          </h2>
          <p className="text-lg md:text-xl text-foreground max-w-4xl mx-auto">
Everything you need to hire, onboard, and manage candidates—seamlessly.           </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Card 1 */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="aspect-video overflow-hidden">
              <img 
                src={doc1} 
                alt="Advanced analytics" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 space-y-4">
              <h3 className="h3-heading font-semibold text-primary">
               Smart Hiring & Candidate Management
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
Post jobs, manage applicants, and identify the right candidates through a structured, end-to-end hiring process.               </p>
              <a 
                href="#" 
                className="inline-block text-primary font-semibold hover:underline"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="aspect-video overflow-hidden">
              <img 
                src={doc2} 
                alt="Advanced analytics" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 space-y-4">
              <h3 className="h3-heading font-semibold text-primary">
               Digital Onboarding & Compliance 
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
Collect documents, manage checklists, and complete eSignatures securely to ensure fast, compliant onboarding.              </p>
              <a 
                href="#" 
                className="inline-block text-primary font-semibold hover:underline"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="aspect-video overflow-hidden">
              <img 
                src={doc3} 
                alt="Advanced analytics" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 space-y-4">
              <h3 className="h3-heading font-semibold text-primary">
               Centralized Tracking & Communication 
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
Track progress in real time and keep applicants informed with automated, secure communication from one dashboard.               </p>
              <a 
                href="#" 
                className="inline-block text-primary font-semibold hover:underline"
              >
                Learn More
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Clients;
