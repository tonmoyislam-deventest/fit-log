import Image from "next/image";

const WorkoutDetailsLeft = ({ workout }) => {
    return (
        <div className="relative min-h-[400px] w-full overflow-hidden rounded-xl">
            <Image
                src={workout.image}
                alt={workout.name}
                fill
                className="object-cover object-[50%_20%]"
            />
        </div>
    );
};

export default WorkoutDetailsLeft;