import Image from "next/image";
import Link from "next/link";

const WorkoutCard = () => {
    return (
        <Link
            href="/workout"
            className="block overflow-hidden rounded-xl border border-[#252830] bg-[#15171c] no-underline"
        >
            {/* Image */}
            <div className="relative h-[190px] w-full overflow-hidden sm:h-[200px]">
                <Image
                    src="/images/workout.png"
                    alt="Workout"
                    fill
                    className="object-cover"
                />
            </div>

            {/* Content */}
            <div className="p-5">

                {/* Categories */}
                <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-[#ccff00] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-black">
                        Chest
                    </span>

                    <span className="rounded-full bg-[#ccff00] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-black">
                        Arms
                    </span>
                </div>

                {/* Title */}
                <h3 className="mt-4 text-xl font-bold uppercase leading-none text-white">
                    Barbell Bench Press
                </h3>

                {/* Equipment */}
                <p className="mt-2 text-sm text-[#92959d]">
                    Barbell, Bench
                </p>

                {/* Stats */}
                <div className="mt-5 flex items-center gap-4 border border-[#24272e] px-3 py-2.5 text-xs text-[#a1a4ad]">

                    <span className="whitespace-nowrap">
                        ◷ 25 min
                    </span>

                    <span className="whitespace-nowrap">
                        🔥 180 kcal
                    </span>

                    <span className="whitespace-nowrap">
                        ☆ 4.8
                    </span>

                </div>

            </div>
        </Link>
    );
};

export default WorkoutCard;