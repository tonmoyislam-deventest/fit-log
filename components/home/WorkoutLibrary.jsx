import SortDropdown from "./SortDropdown";

const WorkoutLibrary = () => {
    return (
        <section
            id="library"
            className="w-full px-4 pt-12 sm:px-6 sm:pt-16 lg:px-8"
        >
            <div className="mx-auto w-full max-w-[1350px]">

                <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

                    <div>
                        <h2 className="text-3xl font-bold uppercase leading-none text-white sm:text-4xl md:text-5xl">
                            The Library
                        </h2>

                        <p className="mt-3 text-sm text-[#a1a1aa] sm:text-base">
                            Twelve lifts covering every major muscle group.
                        </p>
                    </div>

                    <SortDropdown />

                </div>

            </div>
        </section>
    );
};

export default WorkoutLibrary;