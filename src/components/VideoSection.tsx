import assured from "@/assets/Assured.png";
import interim from "@/assets/Interim.jpg";
import rah from "@/assets/RAH.png";
import homeInstead from "@/assets/home instead.jpg";

const VideoSection = () => {
  return (
    <>
      {/* Header Section */}
      <section className="py-8 relative overflow-hidden">
        <div className="container px-4 relative z-10">
          <div className="text-center space-y-3">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Our <span className="text-gradient">Clients</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              From startups to enterprises — PulseBoard keeps teams connected and efficient
            </p>
          </div>
        </div>
      </section>

      {/* Client Logos Section - Full Width with Gradient */}
      <section className="py-16 relative overflow-hidden clients-bg">
        <div className="container px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {/* Right at Home */}
              <div className="bg-white rounded-2xl p-6 shadow-md flex items-center justify-center hover:shadow-lg transition-shadow">
                <img 
                  src={rah} 
                  alt="Right at Home" 
                  className="w-full h-auto object-contain max-h-16"
                />
              </div>

              {/* Assured Home Nursing */}
              <div className="bg-white rounded-2xl p-6 shadow-md flex items-center justify-center hover:shadow-lg transition-shadow">
                <img 
                  src={assured} 
                  alt="Assured Home Nursing" 
                  className="w-full h-auto object-contain max-h-16"
                />
              </div>

              {/* Home Instead */}
              <div className="bg-white rounded-2xl p-6 shadow-md flex items-center justify-center hover:shadow-lg transition-shadow">
                <img 
                  src={homeInstead} 
                  alt="Home Instead" 
                  className="w-full h-auto object-contain max-h-16"
                />
              </div>

              {/* Interim */}
              <div className="bg-white rounded-2xl p-6 shadow-md flex items-center justify-center hover:shadow-lg transition-shadow">
                <img 
                  src={interim} 
                  alt="Interim" 
                  className="w-full h-auto object-contain max-h-16"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoSection;
