import Image from "next/image";
import Link from "next/link";

const WorkoutCard = ({ workout }) => {
    return (
        <Link
            href={`/workout/${workout.id}`}
            className="block overflow-hidden rounded-xl border border-[#252830] bg-[#15171c] no-underline"
        >
            {/* Image */}
            <div className="relative h-58.75 w-full overflow-hidden sm:h-[62.5">
                <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    className="object-content object-[50%_20%]"
                />
            </div>

            {/* Content */}
            <div className="p-5">

                {/* Categories */}
                <div className="flex flex-wrap gap-2">
                    {workout.muscleGroups.map((muscle) => (
                        <span
                            key={muscle}
                            className="rounded-full bg-[#ccff00] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-black"
                        >
                            {muscle}
                        </span>
                    ))}
                </div>

                {/* Title */}
                <h3 className="mt-4 text-xl font-bold uppercase leading-none text-white">
                    {workout.name}
                </h3>

                {/* Equipment */}
                <p className="mt-2 text-sm text-[#92959d]">
                    {workout.equipment}
                </p>

                {/* Stats */}
                <div className="mt-5 flex items-center gap-4 border border-[#24272e] px-3 py-2.5 text-xs text-[#a1a4ad]">

                    <span className="whitespace-nowrap">
                        ◷ {workout.duration} min
                    </span>

                    <span className="whitespace-nowrap">
                        🔥 {workout.caloriesBurned} kcal
                    </span>

                    <span className="whitespace-nowrap">
                        ☆ {workout.rating}
                    </span>

                </div>

            </div>
        </Link>
    );
};

export default WorkoutCard;