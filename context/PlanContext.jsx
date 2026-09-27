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

    const markAsDone = (workout) => {
        setPlan((currentPlan) =>
            currentPlan.filter(
                (item) => item.id !== workout.id
            )
        );
    };

    const removeFromSaved = (workout) => {
        setSaved((currentSaved) =>
            currentSaved.filter(
                (item) => item.id !== workout.id
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
                removeFromSaved,
            }}
        >
            {children}
        </PlanContext.Provider>
    );
};

export default PlanContextProvider;