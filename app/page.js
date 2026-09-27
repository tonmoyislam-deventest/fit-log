import Hero from "@/components/home/Hero";
import WorkoutLibrary from "@/components/home/WorkoutLibrary";
import WorkoutCardParent from "@/components/home/WorkoutCardParent";

export default function Home() {
    return (
        <main>
            <Hero />
            <WorkoutLibrary />
            <WorkoutCardParent />
        </main>
    );
}