const OurClients = () => {
  return (
    <section className="py-16 md:py-20 bg-[#003D82] relative overflow-hidden mt-10">
      <div className="container px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Curious how real-time insights can boost your conversions?
          </h2>

          {/* Subheading */}
          <p className="text-base md:text-lg text-white/90 max-w-3xl mx-auto">
            Connect with us and learn how PulseBoard can give your business the edge.
          </p>

          <div className="flex justify-center items-center mt-8">
            <button
              className="px-8 py-3 bg-white hover:bg-gray-100 text-[#000] rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
