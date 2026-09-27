const PlanSort = () => {
    return (
        <div className="flex items-center gap-3">
            <span className="text-xs font-medium text-[#777b85]">
                Sort By
            </span>

            <select
                defaultValue="duration"
                className="rounded-lg border border-[#272b33] bg-[#15171c] px-3 py-2 text-xs font-medium text-white outline-none"
            >
                <option value="duration">
                    Duration
                </option>

                <option value="calories">
                    Calories
                </option>

                <option value="rating">
                    Rating
                </option>
            </select>
        </div>
    );
};

export default PlanSort;