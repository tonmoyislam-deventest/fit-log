"use client";

import Link from "next/link";
import { useContext } from "react";

import { PlanContext } from "@/context/PlanContext";

const StatusBadges = () => {
    const { plan, saved } = useContext(PlanContext);

    return (
        <div className="flex shrink-0 items-center gap-[clamp(5px,1vw,16px)]">

            {/* Plan */}
            <Link
                href="/my-plan"
                className="flex shrink-0 items-center gap-[clamp(3px,0.4vw,7px)] text-[clamp(0.6875rem,0.9vw,0.875rem)] font-medium leading-none text-white"
            >
                <span>Plan</span>

                <span className="flex size-[clamp(16px,1.5vw,22px)] items-center justify-center rounded-full bg-[#ccff00] text-[clamp(0.5625rem,0.7vw,0.75rem)] font-bold text-black">
                    {plan.length}
                </span>
            </Link>

            {/* Saved */}
            <Link
                href="/my-plan"
                className="flex shrink-0 items-center gap-[clamp(3px,0.4vw,7px)] text-[clamp(0.6875rem,0.9vw,0.875rem)] font-medium leading-none text-white"
            >
                <span>Saved</span>

                <span className="flex size-[clamp(16px,1.5vw,22px)] items-center justify-center rounded-full border border-[#3a3d45] text-[clamp(0.5625rem,0.7vw,0.75rem)] text-[#a1a1aa]">
                    {saved.length}
                </span>
            </Link>

        </div>
    );
};

export default StatusBadges;