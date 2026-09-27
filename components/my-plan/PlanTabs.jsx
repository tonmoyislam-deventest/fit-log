const PlanTabs = () => {
    return (
        <div className="inline-flex w-fit rounded-xl border border-[#272b33] bg-[#15171c] p-1">

            <button
                type="button"
                className="rounded-lg px-4 py-2 text-xs font-bold text-[#8f939d] transition hover:text-white sm:px-5"
            >
                Today&apos;s Plan
            </button>

            <button
                type="button"
                className="rounded-lg bg-[#20242c] px-4 py-2 text-xs font-bold text-white shadow-sm sm:px-5"
            >
                Saved
            </button>

        </div>
    );
};

export default PlanTabs;