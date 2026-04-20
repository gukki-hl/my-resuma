import ScrollBackground from "./home/client/ScrollBackground";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-background">
      <ScrollBackground />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 opacity-30 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 bg-primary/10 rounded-b-full blur-[120px] animate-blob" />
        <div className="absolute bottom-40 right-10 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] animate-blob animation-delay-2000" />
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center max-w-4xl">
      </div>
    </section>
  );
};

export default HeroSection;
