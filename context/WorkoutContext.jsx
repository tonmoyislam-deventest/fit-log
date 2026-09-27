"use client";

import { createContext, useEffect, useState } from "react";

export const WorkoutContext = createContext(null);

const WorkoutContextProvider = ({ children }) => {
    const [workouts, setWorkouts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchWorkouts = async () => {
            try {
                setLoading(true);

                const response = await fetch(
                    "https://api.abcz.workers.dev/api/fitlog"
                );

                if (!response.ok) {
                    throw new Error(
                        "Unable to load workouts. Please try again later."
                    );
                }

                const data = await response.json();

                setWorkouts(data);
            } catch (error) {
                alert(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchWorkouts();
    }, []);

    return (
        <WorkoutContext.Provider
            value={{
                workouts,
                loading,
            }}
        >
            {children}
        </WorkoutContext.Provider>
    );
};

export default WorkoutContextProvider;