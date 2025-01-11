import { ImageCarousel } from "@/components/ImageCarousel";
import { AnimatedStats } from "@/components/AnimatedStats";
import Courses from "@/components/Courses";
import Features from "@/components/Features";

export default function Home() {

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-background to-secondary"
    >
      <ImageCarousel />

      {/* Stats Section */}
      <AnimatedStats />

      {/* Courses Section */}
      <Courses/>

      {/* Features Section */}
      <Features/>
    </div>
  );
}