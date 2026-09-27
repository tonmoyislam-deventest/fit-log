import WorkoutDetailsCTA from "./WorkoutDetailsCTA";
const WorkoutDetailsRight = () => {
    return (
        <>

            {/* 1. Title + Description */}
            <div>
                <h1 className="text-3xl font-black uppercase leading-[0.9] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[48px]">
                    Barbell Bench Press
                </h1>

                <p className="mt-3 max-w-[560px] text-sm leading-5 text-[#a1a1aa] sm:text-[15px] sm:leading-6">
                    A compound press that builds chest thickness, triceps,
                    and pressing power from a stable bench.
                </p>
            </div>


            {/* 2. Category Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-[#ccff00] px-3 py-1 text-[10px] font-bold uppercase leading-none text-black sm:text-[11px]">
                    Chest
                </span>

                <span className="rounded-full bg-[#ccff00] px-3 py-1 text-[10px] font-bold uppercase leading-none text-black sm:text-[11px]">
                    Arms
                </span>
            </div>


            {/* 3. Key Specs */}
            <div className="mt-4 overflow-hidden rounded-xl border border-[#272b33] bg-[#15171c]">

                <div className="flex min-h-[38px] items-center justify-between border-b border-[#272b33] px-3 sm:px-4">
                    <span className="text-[10px] font-bold uppercase tracking-wide text-[#71717a]">
                        Equipment
                    </span>

                    <span className="text-xs text-[#e4e4e7] sm:text-sm">
                        Barbell, Bench
                    </span>
                </div>

                <div className="flex min-h-[38px] items-center justify-between border-b border-[#272b33] px-3 sm:px-4">
                    <span className="text-[10px] font-bold uppercase tracking-wide text-[#71717a]">
                        Difficulty
                    </span>

                    <span className="text-xs text-[#e4e4e7] sm:text-sm">
                        Intermediate
                    </span>
                </div>

                <div className="flex min-h-[38px] items-center justify-between border-b border-[#272b33] px-3 sm:px-4">
                    <span className="text-[10px] font-bold uppercase tracking-wide text-[#71717a]">
                        Sets
                    </span>

                    <span className="text-xs text-[#e4e4e7] sm:text-sm">
                        4
                    </span>
                </div>

                <div className="flex min-h-[38px] items-center justify-between border-b border-[#272b33] px-3 sm:px-4">
                    <span className="text-[10px] font-bold uppercase tracking-wide text-[#71717a]">
                        Reps
                    </span>

                    <span className="text-xs text-[#e4e4e7] sm:text-sm">
                        6-8
                    </span>
                </div>

                <div className="flex min-h-[38px] items-center justify-between border-b border-[#272b33] px-3 sm:px-4">
                    <span className="text-[10px] font-bold uppercase tracking-wide text-[#71717a]">
                        Duration
                    </span>

                    <span className="text-xs text-[#e4e4e7] sm:text-sm">
                        25 min
                    </span>
                </div>

                <div className="flex min-h-[38px] items-center justify-between border-b border-[#272b33] px-3 sm:px-4">
                    <span className="text-[10px] font-bold uppercase tracking-wide text-[#71717a]">
                        Calories
                    </span>

                    <span className="text-xs text-[#e4e4e7] sm:text-sm">
                        180 kcal
                    </span>
                </div>

                <div className="flex min-h-[38px] items-center justify-between px-3 sm:px-4">
                    <span className="text-[10px] font-bold uppercase tracking-wide text-[#71717a]">
                        Rating
                    </span>

                    <span className="text-xs text-[#e4e4e7] sm:text-sm">
                        4.8
                    </span>
                </div>

            </div>


            {/* 4. Instructions */}
            <div className="mt-4">
                <h2 className="text-sm font-black uppercase text-white sm:text-base">
                    Instructions
                </h2>

                <ol className="mt-2 space-y-1.5">
                    <li className="flex gap-2 text-xs leading-4 text-[#a1a1aa] sm:text-sm sm:leading-5">
                        <span className="shrink-0 text-[#71717a]">
                            1.
                        </span>

                        <span>
                            Lie on the bench with eyes under the bar and feet planted.
                        </span>
                    </li>

                    <li className="flex gap-2 text-xs leading-4 text-[#a1a1aa] sm:text-sm sm:leading-5">
                        <span className="shrink-0 text-[#71717a]">
                            2.
                        </span>

                        <span>
                            Unrack with locked elbows and lower the bar to mid-chest.
                        </span>
                    </li>

                    <li className="flex gap-2 text-xs leading-4 text-[#a1a1aa] sm:text-sm sm:leading-5">
                        <span className="shrink-0 text-[#71717a]">
                            3.
                        </span>

                        <span>
                            Press up in a slight arc until elbows lock without bouncing.
                        </span>
                    </li>

                    <li className="flex gap-2 text-xs leading-4 text-[#a1a1aa] sm:text-sm sm:leading-5">
                        <span className="shrink-0 text-[#71717a]">
                            4.
                        </span>

                        <span>
                            Keep shoulder blades pinched and a natural arch in the back.
                        </span>
                    </li>
                </ol>
            </div>
                
        </>
    );
};

export default WorkoutDetailsRight;