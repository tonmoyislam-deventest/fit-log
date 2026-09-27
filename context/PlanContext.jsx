"use client";

import { createContext, useState } from "react";

export const PlanContext = createContext(null);

const PlanContextProvider = ({ children }) => {
    const [plan, setPlan] = useState([]);
    const [saved, setSaved] = useState([]);

    const addToPlan = (workout) => {
        setPlan((currentPlan) => {
            const alreadyExists = currentPlan.some(
                (item) => item.id === workout.id
            );

            if (alreadyExists) {
                return currentPlan;
            }

            return [...currentPlan, workout];
        });
    };

    const addToSaved = (workout) => {
        setSaved((currentSaved) => {
            const alreadyExists = currentSaved.some(
                (item) => item.id === workout.id
            );

            if (alreadyExists) {
                return currentSaved;
            }

            return [...currentSaved, workout];
        });
    };

    // Mark as Done → শুধু Plan থেকে remove হবে
    const markAsDone = (workout) => {
        setPlan((currentPlan) =>
            currentPlan.filter(
                (item) => item.id !== workout.id
            )
        );
    };

    // Plan থেকে manually remove
    const removeFromPlan = (workoutId) => {
        setPlan((currentPlan) =>
            currentPlan.filter(
                (item) => item.id !== workoutId
            )
        );
    };

    // Saved থেকে remove
    const removeFromSaved = (workoutId) => {
        setSaved((currentSaved) =>
            currentSaved.filter(
                (item) => item.id !== workoutId
            )
        );
    };

    return (
        <PlanContext.Provider
            value={{
                plan,
                saved,
                addToPlan,
                addToSaved,
                markAsDone,
                removeFromPlan,
                removeFromSaved,
            }}
        >
            {children}
        </PlanContext.Provider>
    );
};

export default PlanContextProvider;