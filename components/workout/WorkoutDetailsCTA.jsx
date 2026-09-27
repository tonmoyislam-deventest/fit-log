"use client";

import { useContext } from "react";
import { toast } from "react-toastify";

import { PlanContext } from "@/context/PlanContext";

const WorkoutDetailsCTA = ({ workout }) => {
    const { plan, saved, addToPlan, addToSaved } =
        useContext(PlanContext);

    const handleAddToPlan = () => {
        const alreadyInPlan = plan.some(
            (item) => item.id === workout.id
        );

        const alreadySaved = saved.some(
            (item) => item.id === workout.id
        );

        if (alreadyInPlan) {
            toast.error("Already added to today's plan.", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",

                style: {
                    width: "280px",
                    minHeight: "40px",
                    padding: "8px 12px",
                    fontSize: "14px",
                    background: "#111111",
                    color: "#ffffff",
                    marginTop: "50px",
                },
            });

            return;
        }

        if (alreadySaved) {
            toast.error("This workout is already saved.", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",

                style: {
                    width: "280px",
                    minHeight: "40px",
                    padding: "8px 12px",
                    fontSize: "14px",
                    background: "#111111",
                    color: "#ffffff",
                    marginTop: "50px",
                },
            });

            return;
        }

        addToPlan(workout);

        toast.success("Added to today's plan.", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",

            style: {
                width: "280px",
                minHeight: "40px",
                padding: "8px 12px",
                fontSize: "14px",
                background: "#111111",
                color: "#ffffff",
                marginTop: "50px",
            },
        });
    };

    const handleSaveForLater = () => {
        const alreadyInSaved = saved.some(
            (item) => item.id === workout.id
        );

        const alreadyInPlan = plan.some(
            (item) => item.id === workout.id
        );

        if (alreadyInSaved) {
            toast.error("Already saved for later.", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",

                style: {
                    width: "280px",
                    minHeight: "40px",
                    padding: "8px 12px",
                    fontSize: "14px",
                    background: "#111111",
                    color: "#ffffff",
                    marginTop: "50px",
                },
            });

            return;
        }

        if (alreadyInPlan) {
            toast.error("This workout is already in your plan.", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",

                style: {
                    width: "280px",
                    minHeight: "40px",
                    padding: "8px 12px",
                    fontSize: "14px",
                    background: "#111111",
                    color: "#ffffff",
                    marginTop: "50px",
                },
            });

            return;
        }

        addToSaved(workout);

        toast.success("Saved for later.", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",

            style: {
                width: "280px",
                minHeight: "40px",
                padding: "8px 12px",
                fontSize: "14px",
                background: "#111111",
                color: "#ffffff",
                marginTop: "50px",
            },
        });
    };

    return (
        <div className="mt-4 flex flex-wrap gap-2">

            <button
                type="button"
                onClick={handleAddToPlan}
                className="inline-flex min-h-[40px] items-center justify-center gap-2 rounded-md bg-[#ccff00] px-4 text-[10px] font-bold uppercase text-black transition hover:brightness-95 sm:text-xs"
            >
                <span>＋</span>
                Add to today&apos;s plan
            </button>

            <button
                type="button"
                onClick={handleSaveForLater}
                className="inline-flex min-h-[40px] items-center justify-center gap-2 rounded-md border border-[#30343d] px-4 text-[10px] font-bold uppercase text-[#d4d4d8] transition hover:bg-[#181a20] sm:text-xs"
            >
                <span>♡</span>
                Save for later
            </button>

        </div>
    );
};

export default WorkoutDetailsCTA;