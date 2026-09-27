"use client";

import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { toast } from "react-toastify";

import { PlanContext } from "@/context/PlanContext";

const PlanWorkoutCard = ({ workout, isPlan }) => {
    const { markAsDone, removeFromPlan, removeFromSaved } =
        useContext(PlanContext);

    const handleRemoveFromSaved = () => {
        removeFromSaved(workout.id);

        toast.success("Workout removed from saved.", {
            position: "top-right",
            autoClose: 700,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",

            style: {
                width: "270px",
                minHeight: "40px",
                padding: "8px 12px",
                fontSize: "12px",
            },
        });
    };

    const handleRemoveFromPlan = () => {
        removeFromPlan(workout.id);

        toast.success("Workout removed from today's plan.", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",

            style: {
                width: "270px",
                minHeight: "40px",
                padding: "8px 12px",
                fontSize: "12px",
            },
        });
    };

    const handleMarkAsDone = () => {
        markAsDone(workout);

        toast.success("Congratulations! You completed this workout.", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",

            style: {
                width: "270px",
                minHeight: "40px",
                padding: "8px 12px",
                fontSize: "12px",
            },
        });
    };

    return (
        <div className="flex flex-col gap-5 rounded-xl border border-[#272b33] bg-[#15171c] p-5 sm:flex-row sm:items-center">

            {/* Image */}
            <div className="relative h-[120px] w-full shrink-0 overflow-hidden rounded-lg sm:h-[120px] sm:w-[175px]">
                <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    className="object-cover"
                />
            </div>

            {/* Workout Info */}
            <div className="min-w-0 flex-1">

                <h3 className="text-xl font-black uppercase leading-none text-white sm:text-2xl">
                    {workout.name}
                </h3>

                <p className="mt-2 text-sm text-[#92959d]">
                    {workout.equipment}
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-[#a1a4ad]">

                    <span>
                        ◷ {workout.duration} min
                    </span>

                    <span>
                        🔥 {workout.caloriesBurned} kcal
                    </span>

                    <span>
                        ☆ {workout.rating}
                    </span>

                </div>

            </div>

            {/* Actions */}
            <div className="flex shrink-0 items-center gap-2">

                <Link
                    href={`/workout/${workout.id}`}
                    className="inline-flex min-h-[38px] items-center justify-center rounded-md border border-[#30343d] px-4 text-[10px] font-bold uppercase text-[#d4d4d8] transition hover:bg-[#20232a] sm:text-xs"
                >
                    View Details
                </Link>

                {/* Saved */}
                {!isPlan && (
                    <button
                        type="button"
                        onClick={handleRemoveFromSaved}
                        aria-label="Remove from saved"
                        className="flex h-[38px] w-[38px] items-center justify-center rounded-md border border-[#30343d] text-lg font-medium text-[#92959d] transition hover:border-red-500 hover:text-red-500"
                    >
                        ×
                    </button>
                )}

                {/* Today's Plan */}
                {isPlan && (
                    <>
                        <button
                            type="button"
                            onClick={handleMarkAsDone}
                            className="inline-flex min-h-[38px] items-center justify-center rounded-md bg-[#ccff00] px-4 text-[10px] font-bold uppercase text-black transition hover:brightness-95 sm:text-xs"
                        >
                            Mark as Done
                        </button>

                        <button
                            type="button"
                            onClick={handleRemoveFromPlan}
                            aria-label="Remove from plan"
                            className="flex h-[38px] w-[38px] items-center justify-center rounded-md border border-[#30343d] text-lg font-medium text-[#92959d] transition hover:border-red-500 hover:text-red-500"
                        >
                            ×
                        </button>
                    </>
                )}

            </div>

        </div>
    );
};

export default PlanWorkoutCard;