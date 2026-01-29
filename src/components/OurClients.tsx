const OurClients = () => {
  return (
    <section className="py-16 md:py-20 bg-[#003D82] relative overflow-hidden mt-10">
      <div className="container px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h2 className="h2-heading font-bold text-white leading-tight">
           Ready to <span className="text-gradient">simplify hiring</span> while finding the right talent every time?
          </h2>

          {/* Subheading */}
          <p className="text-base md:text-xl text-white/90 max-w-3xl mx-auto">
Experience a faster, smarter, and fully tracked process from start to finish. 
Book a demo           </p>

          <div className="flex justify-center items-center mt-8">
            <button
              className="px-8 py-3 text-[#003D82] font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:opacity-90"
              style={{ background: 'linear-gradient(90deg, #65FFF0 13%, #17D7FF 100%)' }}
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
