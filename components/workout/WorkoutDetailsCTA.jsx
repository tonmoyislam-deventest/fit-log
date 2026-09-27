const WorkoutDetailsCTA = () => {
    return (
        <div className="mt-4 flex flex-wrap gap-2">
            <button
                type="button"
                className="inline-flex min-h-[40px] items-center justify-center gap-2 rounded-md bg-[#ccff00] px-4 text-[10px] font-bold uppercase text-black transition hover:brightness-95 sm:text-xs"
            >
                <span>＋</span>
                Add to today&apos;s plan
            </button>

            <button
                type="button"
                className="inline-flex min-h-[40px] items-center justify-center gap-2 rounded-md border border-[#30343d] px-4 text-[10px] font-bold uppercase text-[#d4d4d8] transition hover:bg-[#181a20] sm:text-xs"
            >
                <span>♡</span>
                Save for later
            </button>
        </div>
    );
};

export default WorkoutDetailsCTA;