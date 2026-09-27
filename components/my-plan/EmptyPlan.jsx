import Link from "next/link";

const EmptyPlan = () => {
    return (
        <div className="mt-6 flex min-h-[280px] w-full flex-col items-center justify-center rounded-xl border border-dashed border-[#272b33] px-5 text-center sm:mt-7 sm:min-h-[300px]">

            <h2 className="text-2xl font-black uppercase leading-none text-white sm:text-3xl">
                Nothing Here Yet
            </h2>

            <p className="mt-3 max-w-md text-sm leading-6 text-[#777b85]">
                Browse the library and add a lift to get today moving.
            </p>

            <Link
                href="/"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-[#ccff00] px-6 py-3 text-xs font-black uppercase text-black transition hover:brightness-95"
            >
                Go to workouts
            </Link>

        </div>
    );
};

export default EmptyPlan;