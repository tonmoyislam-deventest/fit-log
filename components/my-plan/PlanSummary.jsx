const PlanSummary = () => {
    return (
        <div className="mt-7 grid overflow-hidden rounded-xl border border-[#272b33] bg-[#15171c] sm:mt-8 sm:grid-cols-3">

            {/* Exercises */}
            <div className="border-b border-[#272b33] px-5 py-5 sm:border-b-0 sm:border-r">
                <p className="text-xs font-medium text-[#777b85]">
                    Exercises
                </p>

                <p className="mt-2 text-4xl font-black leading-none text-[#ccff00] sm:text-5xl">
                    2
                </p>
            </div>

            {/* Minutes */}
            <div className="border-b border-[#272b33] px-5 py-5 sm:border-b-0 sm:border-r">
                <p className="text-xs font-medium text-[#777b85]">
                    Minutes
                </p>

                <p className="mt-2 text-4xl font-black leading-none text-white sm:text-5xl">
                    23
                </p>
            </div>

            {/* Calories */}
            <div className="px-5 py-5">
                <p className="text-xs font-medium text-[#777b85]">
                    Calories
                </p>

                <p className="mt-2 text-4xl font-black leading-none text-white sm:text-5xl">
                    190
                </p>
            </div>

        </div>
    );
};

export default PlanSummary;
