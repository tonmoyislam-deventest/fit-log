const SortDropdown = () => {
    return (
        <div className="flex items-center gap-2">
            <label
                htmlFor="sort"
                className="text-sm font-medium text-[#a1a1aa]"
            >
                Sort By
            </label>

            <select
                id="sort"
                defaultValue="duration"
                className="rounded-md border border-[#2a2d33] bg-[#15171c] px-3 py-2 text-sm text-white outline-none cursor-pointer"
            >
                <option value="duration">Duration</option>
                <option value="calories">Calories</option>
                <option value="rating">Rating</option>
            </select>
        </div>
    );
};

export default SortDropdown;