import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import WorkoutLibrary from "@/components/home/WorkoutLibrary";
import WorkoutCardParent from "@/components/home/WorkoutCardParent";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <WorkoutLibrary />
        <WorkoutCardParent />

      </main>
    </>
  );
}