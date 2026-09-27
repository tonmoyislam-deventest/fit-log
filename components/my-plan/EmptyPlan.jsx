const EmptyPlan = ({ activeTab }) => {
    return (
        <div className="mt-6 flex min-h-[340px] flex-col items-center justify-center rounded-xl border border-dashed border-[#272b33] px-5 text-center">

            <div className="flex size-12 items-center justify-center rounded-full border border-[#30343d] text-xl text-[#71717a]">
                +
            </div>

            <h2 className="mt-4 text-lg font-bold uppercase text-white">
                Nothing here yet
            </h2>

            <p className="mt-2 max-w-md text-sm leading-6 text-[#71717a]">
                {activeTab === "plan"
                    ? "Add workouts to your today's plan and they will appear here."
                    : "Save workouts for later and they will appear here."
                }
            </p>

        </div>
    );
};

export default EmptyPlan;