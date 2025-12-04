const clients = [
  {
    name: "Interim",
    logo: "/src/assets/Interim.jpg",
  },
  {
    name: "Assured",
    logo: "/src/assets/Assured.jpg",
  },
  {
    name: "RAH",
    logo: "/src/assets/RAH.jpg",
  },
  {
    name: "home instead",
    logo: "/src/assets/home instead.jpg",
  },
];

const OurClients = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-2">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-gradient">Clients</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From startups to enterprises — PulseBoard keeps teams connected and efficient
          </p>
        </div>

        {/* Client Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 max-w-8xl mx-auto">
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
                className="max-h-16 w-auto object-contain group-hover:grayscale-0 transition-all duration-300"
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
