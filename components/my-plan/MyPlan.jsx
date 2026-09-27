import MyPlanHeader from "./MyPlanHeader";
import PlanSummary from "./PlanSummary";
import PlanTabs from "./PlanTabs";
import PlanSort from "./PlanSort";
import EmptyPlan from "./EmptyPlan";

const MyPlan = () => {
    return (
        <main className="w-full">
            <section className="w-full px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">

                <div className="mx-auto w-full max-w-[1290px]">

                    <MyPlanHeader />

                    <PlanSummary />

                    <div className="mt-8 flex flex-col gap-5 sm:mt-10 sm:flex-row sm:items-center sm:justify-between">
                        <PlanTabs />
                        <PlanSort />
                    </div>

                    <EmptyPlan />

                </div>

            </section>
        </main>
    );
};

export default MyPlan;