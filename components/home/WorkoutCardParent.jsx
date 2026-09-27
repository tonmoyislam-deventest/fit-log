"use client";

import { useContext } from "react";
import { WorkoutContext } from "@/context/WorkoutContext";
import WorkoutCard from "./WorkoutCard";

const WorkoutCardParent = () => {
    const {workouts,loading} = useContext(WorkoutContext);

    return (
        <section id="workouts" className="scroll-mt-30 w-full pb-12 sm:pb-16">
            {loading ? <div className="px-4 sm:px-6 lg:px-15">Loading...</div> : <div className="mx-auto w-full max-w-[1290px]">
                <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 sm:grid-cols-2 md:mt-12 lg:mt-12 lg:grid-cols-3">
                    {workouts.map((workout) => (
                        <WorkoutCard
                            key={workout.id}
                            workout={workout}
                        />
                    ))}
                </div>
            </div>}
            
        </section>
    );
};

export default WorkoutCardParent;