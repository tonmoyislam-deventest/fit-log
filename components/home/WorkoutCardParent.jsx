import WorkoutCard from "./WorkoutCard";

const WorkoutCardParent = () => {
    return (
        <section className="w-full pb-12 sm:pb-16">
            <div className="mx-auto w-full max-w-[1290px]">

                <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 sm:grid-cols-2 md:mt-12 lg:mt-12 lg:grid-cols-3">
                    <WorkoutCard />
                    <WorkoutCard />
                    <WorkoutCard />
                    <WorkoutCard />
                    <WorkoutCard />
                    <WorkoutCard />
                </div>

            </div>
        </section>
    );
};

export default WorkoutCardParent;