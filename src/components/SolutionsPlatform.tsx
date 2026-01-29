import applicantsImg from "@/assets/Applicants.png";
import detailsImg from "@/assets/Details.png";
import heroElement from "@/assets/hero-element.png";

const SolutionsPlatform = () => {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background Hero Element - Right Side */}
      <div className="absolute z-20 pointer-events-none hidden lg:block" style={{ right: '-70px', top: '300px', transform: 'scaleX(-1) rotate(40deg)' }}>
        <img src={heroElement} alt="" className="w-[850px]" />
      </div>

      <div className="container px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="h2-heading font-bold" style={{ color: '#003D82' }}>
            Build a Performing Hiring Strategy with our Next-gen solution 
          </h2>
          <p className="text-base md:text-lg text-gray-700 max-w-4xl mx-auto">
From organizing your job plan, customizing, hiring, online tests and so, have things organized to welcome the right fit           </p>
        </div>

        {/* Main Card Container */}
        <div className="max-w-5xl mx-auto">
          <div className="rounded-3xl md:rounded-[3rem] p-6 md:p-12 relative overflow-hidden" style={{ backgroundColor: '#003D82' }}>
            {/* Decorative wave lines on the right */}
            {/* <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-20 pointer-events-none">
              <svg
                viewBox="0 0 200 800"
                fill="none"
                className="h-full w-full"
                preserveAspectRatio="none"
              >
                {[...Array(30)].map((_, i) => (
                  <path
                    key={i}
                    d={`M ${150 + i * 2} 0 Q ${100 + i * 2} ${200 + i * 10} ${150 + i * 2} 400 T ${150 + i * 2} 800`}
                    stroke="#00C0E8"
                    strokeWidth="1"
                    fill="none"
                  />
                ))}
              </svg>
            </div> */}

            <div className="space-y-8 relative z-10">
              {/* Row 1 - Full Width Applicants Image */}
              <div className="bg-white rounded-2xl p-4 shadow-xl">
                <img
                  src={applicantsImg}
                  alt="Applicants Onboarding"
                  className="w-full h-auto"
                />
              </div>

              {/* Row 2 - Two Columns: Text and Details Image */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column - Text Content */}
                <div className="space-y-6 order-2 lg:order-1">
                  <h3 className="h2-heading font-bold text-white">
                   Schedule and Track 
                  </h3>
                  <p className="text-base md:text-lg text-white/90 leading-relaxed">
Create your customized job post, set up your interview pattern and stages.                    </p>

                  {/* Book Demo Button */}
                  <button
                    className="button-item px-8 py-3 text-base font-semibold"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Try it now 
                  </button>
                </div>

                {/* Right Column - Details Image with negative margin-top */}
                <div className="details-img relative order-1 lg:order-2">
                  <div className="rounded-2xl p-4 relative">
                    <img
                      src={detailsImg}
                      alt="Details"
                      className="w-full h-auto px-8"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsPlatform;
