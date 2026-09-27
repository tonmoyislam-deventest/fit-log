"use client";

import { useContext } from "react";
import { useParams } from "next/navigation";

import { WorkoutContext } from "@/context/WorkoutContext";
import WorkoutDetails from "@/components/workout/WorkoutDetails";

const WorkoutDetailsPage = () => {
    const { id } = useParams();
    const { workouts, loading } = useContext(WorkoutContext);

    if (loading) {
        return <p>Loading workout...</p>;
    }

    const workout = workouts.find(
        (item) => item.id === Number(id)
    );

    if (!workout) {
        return <p>Workout not found.</p>;
    }

    return (
        <main>
            <WorkoutDetails workout={workout} />
        </main>
    );
};

export default WorkoutDetailsPage;