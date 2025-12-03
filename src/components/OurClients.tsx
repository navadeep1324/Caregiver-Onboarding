const clients = [
  {
    name: "MedCare Health",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=80&fit=crop&q=80",
  },
  {
    name: "HealthFirst",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=80&fit=crop&q=80",
  },
  {
    name: "CarePoint",
    logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=200&h=80&fit=crop&q=80",
  },
  {
    name: "WellNest",
    logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=200&h=80&fit=crop&q=80",
  },
];

const OurClients = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-gradient">Clients</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From startups to enterprises — PulseBoard keeps teams connected and efficient
          </p>
        </div>

        {/* Client Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 max-w-5xl mx-auto">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="group relative bg-card rounded-2xl p-6 shadow-card hover:shadow-lg transition-all duration-300 flex items-center justify-center min-w-[180px] h-[100px]"
              style={{ 
                animation: `fade-in 0.6s ease-out forwards`,
                animationDelay: `${index * 100}ms`,
                opacity: 0,
              }}
            >
              <img 
                src={client.logo} 
                alt={client.name}
                className="max-h-16 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Trusted by <span className="font-semibold text-primary">100+</span> healthcare organizations worldwide
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
