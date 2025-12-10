import group44 from "@/assets/Group 44.png";
import group45 from "@/assets/Group 45.png";
import heroElement from "@/assets/hero-element.png";

const Clients = () => {
  return (
    <section id="solutions" className="py-16 px-4 lg:px-8 bg-white">
      <div className="container mx-auto max-w-7xl space-y-8">
        {/* First Section - Blue Background */}
        <div className="feature-card-bg py-16  relative overflow-hidden rounded-3xl">
          {/* Decorative pattern in background */}
          {/* <div className="absolute bottom-0 right-0 w-96 h-96 opacity-10">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="white" />
            </pattern>
            <rect width="200" height="200" fill="url(#grid)" />
          </svg>
        </div> */}

          <div className="relative">
            <div className="container mx-auto max-w-7xl">
              <div className="flex flex-col lg:flex-row items-center row-1">
                {/* Left - Content */}
                <div className="text-white space-y-6 relative z-10 lg:w-1/2 card-1">
                  <h2 className="text-4xl md:text-5xl font-bold">
                    Performance You Can See. Results You Can Scale
                  </h2>
                  <p className="text-lg opacity-90 leading-relaxed">
                    Monitor every step of the prospect journey, from initial contact to conversion
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                      <span>Capture Every Inquiry</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                      <span>Seamless Assessment Tracking</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                      <span>Conversion Insights</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                      <span>Performance Analytics</span>
                    </li>
                  </ul>
                </div>

                {/* Right - Image extending to edge */}
                <div className="relative lg:w-1/2 w-full lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2">
                  {/* Hero element background decoration */}
                  <div className="">
                    <img
                      src={heroElement}
                      alt=""
                      className="hero-bg-left"
                    />
                  </div>

                  <img
                    src={group44}
                    alt="Team Performance Dashboard"
                    className="w-full h-auto rounded-l-2xl lg:rounded-r-none relative z-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Section - Green Background */}
        <div className="feature-card-bg-2 py-16 relative overflow-hidden rounded-3xl">
          {/* Decorative element */}
          {/* <div className="absolute top-0 left-0 w-96 h-96 opacity-10">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <pattern id="grid2" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="white" />
            </pattern>
            <rect width="200" height="200" fill="url(#grid2)" />
          </svg>
        </div> */}

          <div className="relative">
            <div className="container mx-auto max-w-7xl">
              <div className="flex flex-col lg:flex-row items-center row-2">
                {/* Left - Image extending to edge */}
                <div className="relative lg:w-1/2 w-full lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 order-2 lg:order-1">
                  {/* Hero element background decoration */}
                  <div className="hero-bg-right">
                    <img
                      src={heroElement}
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <img
                    src={group45}
                    alt="Performance Analytics Dashboard"
                    className="w-full h-auto rounded-r-2xl lg:rounded-l-none relative z-10"
                  />
                </div>

                {/* Right - Content */}
                <div className="text-white space-y-6 relative z-10 lg:w-1/2 lg:ml-auto order-1 lg:order-2 card-2">
                  <h2 className="text-4xl md:text-5xl font-bold">
                    Identify What's Driving Growth, Instantly
                  </h2>
                  <p className="text-lg opacity-90 leading-relaxed">
                    Track what works, identify trends, and optimize your strategy
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                      <span>Track Conversions in Real Time</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                      <span>Identify Top Sources</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                      <span>Optimize Marketing Efforts</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                      <span>Make Data-Driven Decisions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
