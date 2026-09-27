const PlanTabs = ({ activeTab, setActiveTab }) => {
    return (
        <div className="flex w-fit items-center rounded-xl border border-[#272b33] bg-[#15171c] p-1">

            <button
                type="button"
                onClick={() => setActiveTab("plan")}
                className={`rounded-lg px-7 py-2.5 text-xs font-bold transition ${
                    activeTab === "plan"
                        ? "bg-[#252830] text-white"
                        : "text-[#71717a] hover:text-white"
                }`}
            >
                Today&apos;s Plan
            </button>

            <button
                type="button"
                onClick={() => setActiveTab("saved")}
                className={`rounded-lg px-7 py-2.5 text-xs font-bold transition ${
                    activeTab === "saved"
                        ? "bg-[#252830] text-white"
                        : "text-[#71717a] hover:text-white"
                }`}
            >
                Saved
            </button>

        </div>
    );
};

export default PlanTabs;