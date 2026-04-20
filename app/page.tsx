import LandingHeader from "./components/LandingHeader";
import HeroSection from "./components/HeroSection";
export default function Home() {
  return (
    <div className="relative bg-linear-to-b from-[#f8f9fb] to-white dark:from-gray-900 dark:to-gray-800">
      <LandingHeader />
      <HeroSection />
    </div>
  );
}
