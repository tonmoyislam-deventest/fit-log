"use client";

import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

import { PlanContext } from "@/context/PlanContext";

const PlanWorkoutCard = ({ workout, isPlan }) => {
    const { markAsDone, removeFromSaved } =
        useContext(PlanContext);

    return (
        <div className="flex flex-col gap-5 rounded-xl border border-[#272b33] bg-[#15171c] p-5 sm:flex-row sm:items-center">

            {/* Image */}
            <div className="relative h-[120px] w-full shrink-0 overflow-hidden rounded-lg sm:h-[120px] sm:w-[125px]">
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
            <div className="flex shrink-0 flex-wrap items-center gap-2">

                <Link
                    href={`/workout/${workout.id}`}
                    className="inline-flex min-h-[38px] items-center justify-center rounded-md border border-[#30343d] px-4 text-[10px] font-bold uppercase text-[#d4d4d8] transition hover:bg-[#20232a] sm:text-xs"
                >
                    View Details
                </Link>

                {isPlan ? (
                    <button
                        type="button"
                        onClick={() => markAsDone(workout)}
                        className="inline-flex min-h-[38px] items-center justify-center rounded-md bg-[#ccff00] px-4 text-[10px] font-bold uppercase text-black transition hover:brightness-95 sm:text-xs"
                    >
                        Mark as Done
                    </button>
                ) : (
                    <button
                        type="button"
                        onClick={() => removeFromSaved(workout)}
                        aria-label={`Remove ${workout.name} from saved`}
                        className="flex size-[38px] items-center justify-center rounded-md border border-[#30343d] text-lg leading-none text-[#a1a1aa] transition hover:border-red-500 hover:text-red-500"
                    >
                        ×
                    </button>
                )}

            </div>
        </div>
    );
};

export default PlanWorkoutCard;