const WorkoutDetailsLeft = () => {
    return (
        <div className="flex h-full w-full items-center">
            <div className="w-full overflow-hidden rounded-xl border border-[#272b33] bg-[#15171c]">
                <div className="aspect-square w-full">
                    <img
                        src="/images/workout-detail.png"
                        alt="Barbell Bench Press"
                        className="h-full w-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default WorkoutDetailsLeft;