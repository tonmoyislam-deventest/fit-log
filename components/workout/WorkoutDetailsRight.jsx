const WorkoutDetailsRight = ({ workout }) => {
    return (
        <>
            {/* 1. Title + Description */}
            <div>
                <h1 className="text-3xl font-black uppercase leading-[0.9] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[48px]">
                    {workout.name}
                </h1>

                <p className="mt-3 max-w-[560px] text-sm leading-5 text-[#a1a1aa] sm:text-[15px] sm:leading-6">
                    {workout.description}
                </p>
            </div>

            {/* 2. Category Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
                {workout.muscleGroups?.map((muscle) => (
                    <span
                        key={muscle}
                        className="rounded-full bg-[#ccff00] px-3 py-1 text-[10px] font-bold uppercase leading-none text-black sm:text-[11px]"
                    >
                        {muscle}
                    </span>
                ))}
            </div>

            {/* 3. Key Specs */}
            <div className="mt-4 overflow-hidden rounded-xl border border-[#272b33] bg-[#15171c]">

                {/* Equipment */}
                <div className="flex min-h-[38px] items-center justify-between border-b border-[#272b33] px-3 sm:px-4">
                    <span className="text-[10px] font-bold uppercase tracking-wide text-[#71717a]">
                        Equipment
                    </span>

                    <span className="text-xs text-[#e4e4e7] sm:text-sm">
                        {workout.equipment}
                    </span>
                </div>

                {/* Difficulty */}
                <div className="flex min-h-[38px] items-center justify-between border-b border-[#272b33] px-3 sm:px-4">
                    <span className="text-[10px] font-bold uppercase tracking-wide text-[#71717a]">
                        Difficulty
                    </span>

                    <span className="text-xs text-[#e4e4e7] sm:text-sm">
                        {workout.difficulty}
                    </span>
                </div>

                {/* Sets */}
                <div className="flex min-h-[38px] items-center justify-between border-b border-[#272b33] px-3 sm:px-4">
                    <span className="text-[10px] font-bold uppercase tracking-wide text-[#71717a]">
                        Sets
                    </span>

                    <span className="text-xs text-[#e4e4e7] sm:text-sm">
                        {workout.sets}
                    </span>
                </div>

                {/* Reps */}
                <div className="flex min-h-[38px] items-center justify-between border-b border-[#272b33] px-3 sm:px-4">
                    <span className="text-[10px] font-bold uppercase tracking-wide text-[#71717a]">
                        Reps
                    </span>

                    <span className="text-xs text-[#e4e4e7] sm:text-sm">
                        {workout.reps}
                    </span>
                </div>

                {/* Duration */}
                <div className="flex min-h-[38px] items-center justify-between border-b border-[#272b33] px-3 sm:px-4">
                    <span className="text-[10px] font-bold uppercase tracking-wide text-[#71717a]">
                        Duration
                    </span>

                    <span className="text-xs text-[#e4e4e7] sm:text-sm">
                        {workout.duration} min
                    </span>
                </div>

                {/* Calories */}
                <div className="flex min-h-[38px] items-center justify-between border-b border-[#272b33] px-3 sm:px-4">
                    <span className="text-[10px] font-bold uppercase tracking-wide text-[#71717a]">
                        Calories
                    </span>

                    <span className="text-xs text-[#e4e4e7] sm:text-sm">
                        {workout.caloriesBurned} kcal
                    </span>
                </div>

                {/* Rating */}
                <div className="flex min-h-[38px] items-center justify-between px-3 sm:px-4">
                    <span className="text-[10px] font-bold uppercase tracking-wide text-[#71717a]">
                        Rating
                    </span>

                    <span className="text-xs text-[#e4e4e7] sm:text-sm">
                        {workout.rating}
                    </span>
                </div>

            </div>

            {/* 4. Instructions */}
            <div className="mt-4">
                <h2 className="text-sm font-black uppercase text-white sm:text-base">
                    Instructions
                </h2>

                <ol className="mt-2 space-y-1.5">
                    {workout.instructions?.map((instruction, index) => (
                        <li
                            key={index}
                            className="flex gap-2 text-xs leading-4 text-[#a1a1aa] sm:text-sm sm:leading-5"
                        >
                            <span className="shrink-0 text-[#71717a]">
                                {index + 1}.
                            </span>

                            <span>
                                {instruction}
                            </span>
                        </li>
                    ))}
                </ol>
            </div>
        </>
    );
};

export default WorkoutDetailsRight;