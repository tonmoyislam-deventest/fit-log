"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = () => {
    const pathname = usePathname();

    const isWorkoutsActive = pathname === "/";
    const isMyPlanActive = pathname === "/my-plan";

    return (
        <div className="flex min-w-0 items-center gap-[clamp(2px,0.5vw,8px)]">

            <Link
                href="/"
                className={`whitespace-nowrap rounded-full px-[clamp(8px,1vw,16px)] py-[clamp(5px,0.5vw,8px)] text-[clamp(0.6875rem,0.9vw,0.875rem)] font-semibold leading-none transition-colors ${
                    isWorkoutsActive
                        ? "bg-[#ccff00]/15 text-[#ccff00]"
                        : "text-[#a1a1aa] hover:text-white"
                }`}
            >
                Workouts
            </Link>

            <Link
                href="/my-plan"
                className={`whitespace-nowrap rounded-full px-[clamp(8px,1vw,16px)] py-[clamp(5px,0.5vw,8px)] text-[clamp(0.6875rem,0.9vw,0.875rem)] font-medium leading-none transition-colors ${
                    isMyPlanActive
                        ? "bg-[#ccff00]/15 text-[#ccff00]"
                        : "text-[#a1a1aa] hover:text-white"
                }`}
            >
                My Plan
            </Link>

        </div>
    );
};

export default NavLinks;