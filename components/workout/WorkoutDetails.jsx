import WorkoutDetailsCTA from "./WorkoutDetailsCTA";
import WorkoutDetailsLeft from "./WorkoutDetailsLeft";
import WorkoutDetailsRight from "./WorkoutDetailsRight";

const WorkoutDetails = ({ workout }) => {
    return (
        <section className="flex min-h-[calc(100vh-64px)] w-full items-center px-4 py-6 sm:px-6 md:py-8 lg:px-8">

            <div className="mx-auto grid w-full max-w-322.5 grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">

                <WorkoutDetailsLeft workout={workout} />

                <div className="w-full lg:flex lg:h-full lg:flex-col lg:justify-center">

                    <WorkoutDetailsRight workout={workout} />

                    <WorkoutDetailsCTA workout={workout} />

                </div>

            </div>

        </section>
    );
};

export default WorkoutDetails;